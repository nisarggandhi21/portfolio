// Total coding time from WakaTime, fetched on the server and cached for an hour.
// Returns null when the API key is missing or the request fails, so the page
// can fall back to a plain link.
export async function getCodingHours(): Promise<number | null> {
  const apiKey = process.env.WAKATIME_API_KEY;
  if (!apiKey) return null;

  try {
    const res = await fetch(
      "https://wakatime.com/api/v1/users/current/stats/all_time",
      {
        headers: {
          Authorization: `Basic ${Buffer.from(apiKey).toString("base64")}`,
        },
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) {
      console.error(`WakaTime API error: ${res.status}`);
      return null;
    }
    const data = await res.json();
    const seconds = data?.data?.total_seconds;
    return typeof seconds === "number" ? Math.round(seconds / 3600) : null;
  } catch (e) {
    console.error("Error fetching WakaTime stats:", e);
    return null;
  }
}
