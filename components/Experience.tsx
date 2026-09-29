import { FaLocationDot } from "react-icons/fa6";

import { workExperience } from "@/data";

// Render **text** from the data as highlighted metrics
const Highlighted = ({ text }: { text: string }) => (
  <>
    {text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
      i % 2 === 1 ? (
        <span key={i} className="font-semibold text-purple">
          {part}
        </span>
      ) : (
        part
      ),
    )}
  </>
);

const Experience = () => {
  return (
    <section className="py-20 w-full" id="experience">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <ol className="relative mt-12 border-l border-white/[0.1] ml-2 md:ml-4">
        {workExperience.map((job) => (
          <li key={job.id} className="relative pl-6 md:pl-10 pb-12 last:pb-0">
            {/* timeline dot */}
            <span className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-purple bg-black" />

            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {job.company}
                </h2>
                <p className="mt-1 text-lg text-white-100">
                  {job.role}
                  {job.note && (
                    <span className="ml-2 inline-block rounded-full border border-purple/40 bg-purple/10 px-2.5 py-0.5 align-middle text-xs font-medium text-purple">
                      {job.note}
                    </span>
                  )}
                </p>
              </div>
              <div className="text-sm text-white-200 md:text-right shrink-0">
                <p className="font-medium text-white">{job.period}</p>
                <p className="mt-1 inline-flex items-center gap-1.5">
                  <FaLocationDot aria-hidden className="text-xs" />
                  {job.location}
                </p>
              </div>
            </div>

            <div
              className={`mt-6 grid gap-4 ${
                job.projects.length > 1 ? "md:grid-cols-2" : ""
              }`}
            >
              {job.projects.map((project) => (
                <div
                  key={project.name}
                  className="rounded-2xl border border-white/[0.1] p-5 md:p-6"
                  style={{ background: "rgb(4,7,29)" }}
                >
                  <h3 className="text-lg font-bold text-white">
                    {project.name}
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-lg bg-[#2b2535] px-2.5 py-1 text-xs text-white"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-4 space-y-2 text-sm md:text-base text-white-200 list-disc pl-5 marker:text-purple">
                    {project.points.map((point) => (
                      <li key={point}>
                        <Highlighted text={point} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
