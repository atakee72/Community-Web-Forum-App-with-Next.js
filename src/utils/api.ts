export const fetchApiData = async (
  envExtension: string, // the chosen extension of the environment variable, like '...API_URL' etc.
  endpoint: string,
  options?: RequestInit
): Promise<{ data: [] }> => {
  const baseUrl = process.env[envExtension];
  if (!baseUrl) {
    throw new Error(`${envExtension} is not defined in environment variables.`);
  }

  const url: string = `${baseUrl}${endpoint}`;

  try {
    const response: Response = await fetch(url, {
      ...options,
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch requested data");
    }

    const data = await response.json();
    if (!data) {
      throw new Error("Failed to parse requested data");
    }

    console.log(data);

    return data;
  } catch (error: unknown) {
    console.error("Error loading requested data:", error);
    throw error;
  }
};
