// "Jul 2024 – Jun 2026" -> wraps between the two dates in the narrow date column
const Period = ({ period }: { period: string }) => {
  const [start, end] = period.split(" – ");
  if (!end) return <>{period}</>;
  return (
    <>
      <span className="whitespace-nowrap">{start} –</span>{" "}
      <span className="whitespace-nowrap">{end}</span>
    </>
  );
};

export default Period;
