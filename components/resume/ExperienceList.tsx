import { workExperience } from "@/data";

// Render **text** from the data as emphasised metrics
const Emphasis = ({ text }: { text: string }) => (
  <>
    {text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
      i % 2 === 1 ? (
        <strong key={i} className="font-semibold text-foreground">
          {part}
        </strong>
      ) : (
        part
      )
    )}
  </>
);

const ExperienceList = () => (
  <div className="space-y-14">
    {workExperience.map((job) => (
      <article key={job.id}>
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <h3 className="font-serif text-3xl">{job.company}</h3>
          <p className="text-sm tabular-nums text-muted-foreground">
            {job.period}
          </p>
        </div>
        <div className="mt-1 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 text-sm">
          <p className="font-medium">
            {job.role}
            {job.note && (
              <span className="font-normal text-muted-foreground">
                {" "}
                · {job.note}
              </span>
            )}
          </p>
          <p className="text-muted-foreground">{job.location}</p>
        </div>

        <div className="mt-6 space-y-6">
          {job.projects.map((project) => (
            <div key={project.name}>
              <h4 className="font-medium">{project.name}</h4>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {project.stack.join(" · ")}
              </p>
              <ul className="mt-2.5 list-disc space-y-1.5 pl-5 leading-relaxed text-foreground/80 marker:text-muted-foreground/50">
                {project.points.map((point) => (
                  <li key={point}>
                    <Emphasis text={point} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>
    ))}
  </div>
);

export default ExperienceList;
