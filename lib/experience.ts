import { workExperience } from "@/data";
import { formatYears, monthsBetween } from "./dates";

// Months across all roles; ongoing roles count up to the current month
export const totalExperienceMonths = () =>
  workExperience.reduce(
    (sum, job) => sum + monthsBetween(job.start, job.end),
    0,
  );

// Total experience in whole years, e.g. "3 years"
export const experienceYears = () => formatYears(totalExperienceMonths());
