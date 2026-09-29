---
title: "Jev and System One Models: When an LLM Stops Talking and Starts Deciding"
date: "2026-09-29"
description: "TypeSafe's Jev gives up text generation to return typed, calibrated decisions in milliseconds. A first-principles look at why that trade matters for automation, and where it doesn't."
tags: ["AI", "LLMs", "System One Models", "Automation"]
---

Models have been superhuman at chat for years. So why is so little of our software actually run by AI?

That is the question TypeSafe AI opens with in their launch post, [Introducing System One Models & Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev). I spent some time with it, and I think the idea underneath is more important than the model itself. So let's break it down from first principles.

## The problem: software doesn't want prose

Think about where an AI decision actually sits inside a real system.

It is rarely a chat window. It is an `if` statement buried in a pipeline:

- Is this support ticket about billing, a bug, or spam?
- Should this transaction be flagged?
- Which of these 300 links gets me closer to the target page?

Today, we answer these by asking a chat model to *write* the answer and then scraping it back out:

```ts
// The usual way: generate text, then hope it parses
const text = await llm.generate(prompt); // token by token, often seconds
const parsed = parseDecision(text); // might fail

if (!parsed.ok) {
  // retry: more latency, more cost
}
```

This works for demos. It hurts in production, for four reasons:

1. **Latency.** Generation is sequential, one token at a time. TypeSafe puts end-to-end response times for frontier models at 3 to 329 seconds. Fine for a human, painful for code that runs a million times a day.
2. **Cost.** You pay for every output token, and output tokens are the expensive ones.
3. **Shape.** A string can be anything: the right answer, a refusal, a hallucinated tool call, or JSON with one missing brace. Every caller needs parsing, validation and retries.
4. **Confidence.** This is the subtle one. If a model is right 95% of the time but can't tell you *which* 5% it's wrong on, you can't safely automate that task at all.

## The idea: System One models

The naming comes from Daniel Kahneman's *Thinking, Fast and Slow*. **System 2** is slow, deliberate reasoning. **System 1** is fast, intuitive judgement.

Chat LLMs, especially with reasoning, lean System 2. They think out loud, in text.

But most decisions inside software are System 1 shaped. You already know the possible answers. You just need the model to pick one, quickly, and tell you how sure it is.

TypeSafe's framing is simple:

> Unstructured state in, typed probabilistic decisions out.

Their first model, **Jev**, gives up free-form text generation entirely. You define the output space up front (the labels, fields and types), and Jev returns values that always match it, each with a calibrated probability.

In other words, **the LLM stops being a chat partner and becomes a function call.**

## How it works (at the level they've shared)

The post names three pieces of the stack.

### 1. A new model architecture

Designed with an emphasis on structured program state as input, rather than a conversation of messages.

### 2. A parallel sampler

This is where the speed comes from, and it's worth understanding from first principles.

An autoregressive LLM produces output one token at a time, each conditioned on the last. If your answer is a JSON object with ten fields, you wait for every token of every field, in order.

But if the answer space is known in advance, you don't need to *generate* anything. You need a probability distribution over the allowed options. TypeSafe says Jev generates all of its outputs in a single query, in parallel, instead of token by token.

That one design choice removes the sequential bottleneck, which fits with them pricing output as effectively free.

### 3. A new training method: RLCD

Reinforcement Learning for Calibrated Decisions. Compare what each approach optimises for:

- **RLHF** rewards answers that human raters prefer.
- **RLVR** rewards outputs that can be checked programmatically.
- **RLCD** rewards *epistemically honest probabilities*: when Jev says 90%, it should be right about 90% of the time.

Calibration is the whole game for automation. It's what lets you write code like this:

```ts
// Illustrative only: not TypeSafe's actual SDK
type Route = "billing" | "bug" | "feature_request" | "spam";

const decision = await decide<Route>({
  state: ticket, // unstructured input
  options: ["billing", "bug", "feature_request", "spam"],
});

// e.g. decision.probabilities = { billing: 0.91, bug: 0.06, ... }
if (decision.confidence >= 0.9) {
  routeTo(decision.value); // automate the confident cases
} else {
  sendToHuman(ticket); // escalate the uncertain ones
}
```

The model doesn't have to be right every time. It has to know when it might be wrong, so the surrounding code can decide what to do.

## The numbers they claim

These are TypeSafe's published figures, not my benchmarks:

- **Speed:** 70 to 500 ms end-to-end, which they describe as 40 to 200 times faster than frontier LLMs on System One shaped queries.
- **Cost:** $0.042 per million input tokens, with output "too cheap to meter". For comparison, they list LLM input pricing at $0.20 to $10 per million tokens, with output around 5 times more.
- **Workflow evals:** up to 193.6 times faster and 444.6 times cheaper, which they say is at the higher end of what to expect in the real world.
- **Type errors:** zero, because outputs are constrained to the schema.

The demos make it concrete. One runs a Doom bot at 10 decisions per second for roughly $7 an hour. Another plays Wikiracing, where each step means choosing among hundreds or thousands of links. Jev supports up to 255 options per choice and uses a two-stage "score, then choose" approach beyond that.

## What I liked: the nuance

The part of the post I respected most is that every claim comes with a "Nuance" section listing its own weaknesses:

- Their workflow evals use the average of GPT-6 Astra and Fable 5.1 as the reference answer, which they note biases results toward those models.
- The workflows were written by their own team, so some bias could exist.
- Their speed numbers are measured from the US West Coast, where the service runs.
- They can't yet prove the pricing isn't subsidised.

It's also worth being precise about "can't hallucinate". What's guaranteed is that the output always matches the schema. Jev can still pick the *wrong* option. The difference is that it will be a valid option, with a probability attached that tells you how much to trust it.

## Where it fits, and where it doesn't

Jev deliberately trades generality for reliability. So it shines where the answer space is known:

- **Smart if-statements:** classify, route, score, extract and branch where hand-written rules are too brittle.
- **Map-reduce over large data:** turning huge datasets into features at a cost that was previously unthinkable.
- **Real-time apps:** 100 ms decisions are fast enough to sit directly in a user-facing flow.
- **Verifiers and guardrails:** scoring or judging the output of other LLMs, including jailbreak detection.

And it is the wrong tool whenever you need text: writing, summarising, code generation, open-ended chat. That's still System 2 territory, and chat LLMs remain the right choice there.

In practice, I expect the two to work together: an LLM does the slow, open-ended reasoning, and a System One model makes the thousands of fast, cheap decisions around it.

## Why this matters

I wrote earlier that [prompt engineering is giving way to loop engineering](/blog/prompt-engineering-is-dead-loop-engineering-has-arrived): building continuous, event-driven systems around models. Those loops are full of small decisions. Should this event trigger the agent? Is this output good enough to ship? Which path should we take next?

Today each of those decisions is a slow, expensive, occasionally malformed LLM call. A fast, typed, calibrated decision model changes the economics of every one of them.

That's also where the name comes from. Jev is named after William Stanley Jevons, who observed that as steam engines made coal more efficient to use, total demand for coal went *up*, not down. TypeSafe is betting the same happens with intelligence: every order-of-magnitude drop in the cost of a decision unlocks far more places to use one.

## Key takeaways

1. Most AI inside software is a **decision**, not a conversation, and strings are an expensive, fragile way to return decisions.
2. If the output space is known in advance, you can **skip generation** and score all options in parallel. That's where the speed and cost gains come from.
3. **Calibration** is what makes automation safe: automate the confident cases, escalate the rest.
4. Treat the headline numbers as the company's claims. Jev is in early access, so benchmark it on your own workflows before betting on it.

The shift I'm watching isn't a smarter chatbot. It's AI becoming a typed, dependable building block that ordinary code can call like any other function.
