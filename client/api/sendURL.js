export default async function sendURL(url) {
  try {
    const response = await fetch("http://localhost:4000/api/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        longUrl: url,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Something went wrong");
    }

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}