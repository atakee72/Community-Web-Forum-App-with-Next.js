export const fetchDataFromApi = async <T>(
  apiPath: string,
  options?: RequestInit
): Promise<{ data: T[] }> => {
  const apiUrl = process.env.API_URL;

  console.log(`Fetching data from: ${apiUrl}${apiPath}`); // Debug URL

  try {
    const res = await fetch(
      `${apiUrl}${apiPath}
    // api/topics
    `,
      {
        ...options,
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error(
        `Failed to fetch data from ${apiPath} with status: ${res.status}`
      );
    }

    const data = await res.json();

    console.log("Fetched data:", data); // Debug fetched data

    return { data };
  } catch (error) {
    console.error(`Error loading data from ${apiPath}:`, error);
    return { data: [] };
  }
};
