"use client";

import { useEffect, useState } from "react";

// The page is statically generated, so a year computed on the server stays
// frozen at build time. Start from that value (so hydration matches) and
// update to the visitor's current year after mount.
const CurrentYear = ({ initialYear }: { initialYear: number }) => {
  const [year, setYear] = useState(initialYear);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <>{year}</>;
};

export default CurrentYear;
