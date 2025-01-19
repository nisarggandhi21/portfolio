export interface WakatimeRes {
  data: {
    decimal: string;
    digital: string;
    is_up_to_date: boolean;
    percent_calculated: number;
    range: {
      end: string;
      end_date: string;
      end_text: string;
      start: string;
      start_date: string;
      start_text: string;
      timezone: string;
    };
    text: string;
    timeout: number;
    total_seconds: number;
  };
}

export const fetchWakatimeStats = async (): Promise<{ seconds: number }> => {
  try {
    const res = await fetch("/api/wakatime");
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return { seconds: data.seconds };
  } catch (error) {
    console.error("Fetch failed:", error);
    throw error;
  }
};

export { fetchWakatimeStats as getCodingHrs };
