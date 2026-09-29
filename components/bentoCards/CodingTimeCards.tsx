"use client";

import { useState, useEffect } from "react";
import { getCodingHrs } from "@/lib/getCodingHrs";
import CountUp from "react-countup";

function CodingTimeCards() {
  const [seconds, setSeconds] = useState<number | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCodingData = async () => {
      try {
        const data = await getCodingHrs();
        setSeconds(data.seconds);
      } catch (err) {
        console.error("Error fetching Wakatime stats:", err);
        setError(true);
      }
    };

    fetchCodingData();
  }, []);

  const hours = seconds !== null ? Math.round(seconds / 3600) : null;

  return (
    <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 my-3">
      {error ? (
        // The whole card links to WakaTime, so point visitors there instead of showing an error
        <p className="text-base lg:text-xl font-normal text-[#C1C2D3]">
          View my stats on WakaTime &rarr;
        </p>
      ) : hours !== null ? (
        <div>
          <CountUp start={0} end={hours} duration={2.5} separator="," />
          <span> hours</span>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default CodingTimeCards;
