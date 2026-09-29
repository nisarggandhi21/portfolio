import { skillGroups } from "@/data";

const SkillsList = () => (
  <dl className="space-y-4">
    {skillGroups.map((group) => (
      <div
        key={group.title}
        className="grid gap-1 md:grid-cols-[10rem_1fr] md:gap-6"
      >
        <dt className="font-medium">{group.title}</dt>
        <dd className="leading-relaxed text-foreground/80">
          {group.skills.join(", ")}
        </dd>
      </div>
    ))}
  </dl>
);

export default SkillsList;
