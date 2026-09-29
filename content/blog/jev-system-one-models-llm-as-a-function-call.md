---
title: "Jev and System One Models: When an LLM Stops Talking and Starts Deciding"
date: "2026-09-29"
description: "TypeSafe's Jev gives up text generation to return typed, calibrated decisions in milliseconds. Here's why that matters for automation."
tags: ["AI", "LLMs", "System One Models", "Automation"]
---

Models have been great at chat for years. So why is so little software actually run by AI?

That's the question behind TypeSafe AI's launch of [System One models and Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev). The idea is simple, and I think it's important.

## The problem

Most AI inside software isn't a chat. It's a decision:

- Is this ticket billing, a bug, or spam?
- Should this transaction be flagged?

Today we ask an LLM to *write* the answer, then parse the text. That's:

- **Slow:** text is generated one token at a time.
- **Expensive:** you pay for every output token.
- **Fragile:** the output can be malformed or hallucinated.
- **Unsure:** the model can't reliably tell you when it's wrong.

## The idea

The name comes from Kahneman's *Thinking, Fast and Slow*. System 2 is slow reasoning. System 1 is fast judgement.

Most decisions in code are System 1: you already know the possible answers. You just need the model to pick one and say how sure it is.

So Jev doesn't generate text at all. You define the allowed outputs, and it returns:

- a value that always matches your types
- a calibrated probability for each option

**The LLM becomes a function call.**

## How it's fast

An LLM writes answers token by token. But if the answer is one of a few known options, there's nothing to write. You only need a score for each option.

Jev scores all outputs in parallel, in a single query. TypeSafe also trains it with a new method, RLCD (Reinforcement Learning for Calibrated Decisions), so that "90% sure" really means right about 90% of the time.

That calibration is what makes automation safe:

```ts
// Illustrative only: not TypeSafe's actual SDK
const decision = await decide({
  state: ticket,
  options: ["billing", "bug", "spam"],
});

if (decision.confidence >= 0.9) routeTo(decision.value);
else sendToHuman(ticket);
```

Automate the confident cases. Send the rest to a human.

## The numbers (TypeSafe's claims)

- **Speed:** 70–500 ms, versus seconds or minutes for frontier LLMs.
- **Cost:** $0.042 per million input tokens; output is effectively free.
- **Type errors:** zero, since outputs always match the schema.

"Can't hallucinate" means the answer is always a valid option. It can still pick the wrong one, but it tells you how confident it is.

To their credit, the post also lists its own caveats, like bias in how they evaluated and that the pricing isn't yet proven long-term.

## Where it fits

**Good for:** routing, classification, scoring, extraction, guardrails and real-time features.

**Not for:** anything that needs text, like writing, summaries, code or chat. That's still LLM territory.

The best setup is likely both: an LLM for open-ended thinking, and a fast System One model for the many small decisions around it.

## Why it matters

I wrote about [loop engineering](/blog/prompt-engineering-is-dead-loop-engineering-has-arrived): AI systems that run in continuous loops. Those loops are full of small decisions. Making each one fast, cheap and typed changes what's possible.

Jev is named after William Stanley Jevons: when coal got cheaper to use, demand went up. Cheaper intelligence should work the same way.

Jev is in early access, so treat the numbers as claims and test it on your own workloads. But the shift is clear: AI is becoming something ordinary code can call like a function.
