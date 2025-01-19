"use client";

import { useState, useEffect } from "react";
import { getCodingHrs } from "@/lib/getCodingHrs";
import CountUp from "react-countup";

function CodingTimeCards() {
  const [seconds, setSeconds] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCodingData = async () => {
      try {
        const data = await getCodingHrs();
        setSeconds(data.seconds);
      } catch (err) {
        console.error("Error fetching Wakatime stats:", err);
        setError("Failed to load coding hours. Please try again later.");
      }
    };

    fetchCodingData();
  }, []);

  const hours = seconds !== null ? Math.round(seconds / 3600) : null;

  return (
    <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 my-3">
      {error ? (
        <p className="text-red-500">{error}</p>
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
