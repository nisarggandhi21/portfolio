const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// "2024-07" -> { year: 2024, month: 7 }
function parse(ym: string) {
  const [year, month] = ym.split("-").map(Number);
  return { year, month };
}

// Whole months from start to end, counting both ends (Jul 2024 – Jun 2026 = 24)
export function monthsBetween(start: string, end: string): number {
  const a = parse(start);
  const b = parse(end);
  return (b.year - a.year) * 12 + (b.month - a.month) + 1;
}

// 31 -> "2 yrs 7 mos", 4 -> "4 mos", 12 -> "1 yr"
export function formatDuration(totalMonths: number): string {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts = [];
  if (years) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  if (months) parts.push(`${months} ${months === 1 ? "mo" : "mos"}`);
  return parts.join(" ") || "0 mos";
}

// "2024-07" -> "Jul 2024"
export function formatMonth(ym: string): string {
  const { year, month } = parse(ym);
  return `${MONTHS[month - 1]} ${year}`;
}

export function yearOf(ym: string): number {
  return parse(ym).year;
}
