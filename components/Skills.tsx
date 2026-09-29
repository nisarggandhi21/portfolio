import type { IconType } from "react-icons";
import {
  FaBrain,
  FaCloud,
  FaDatabase,
  FaLaptopCode,
  FaScrewdriverWrench,
  FaServer,
} from "react-icons/fa6";

import { skillGroups } from "@/data";

const icons: Record<string, IconType> = {
  Frontend: FaLaptopCode,
  Backend: FaServer,
  Databases: FaDatabase,
  "DevOps & Cloud": FaCloud,
  "Testing & Tools": FaScrewdriverWrench,
  "AI & Integrations": FaBrain,
};

const Skills = () => {
  return (
    <section className="py-20 w-full" id="skills">
      <h1 className="heading">
        My <span className="text-purple">skills</span>
      </h1>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group) => {
          const Icon = icons[group.title] ?? FaLaptopCode;
          return (
            <div
              key={group.title}
              className="rounded-3xl border border-white/[0.1] p-6"
              style={{ background: "rgb(4,7,29)" }}
            >
              <h2 className="flex items-center gap-3 text-lg font-bold text-white">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple/10 text-purple">
                  <Icon aria-hidden />
                </span>
                {group.title}
              </h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg bg-[#2b2535] px-3 py-1.5 text-sm text-white"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
