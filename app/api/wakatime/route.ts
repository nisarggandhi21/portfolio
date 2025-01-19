import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.WAKATIME_API_KEY;
    if (!apiKey) {
      throw new Error("WAKATIME_API_KEY is not configured");
    }

    const url = `https://wakatime.com/api/v1/users/current/stats/all_time`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Basic ${Buffer.from(apiKey).toString("base64")}`,
      },
    });

    if (!response.ok) {
      console.error(`WakaTime API error: ${response.status}`);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json({ seconds: data.data.total_seconds });
  } catch (e) {
    console.error("Error fetching Wakatime stats:", e);
    return NextResponse.json(
      { error: "Failed to fetch Wakatime stats" },
      { status: 500 }
    );
  }
}
