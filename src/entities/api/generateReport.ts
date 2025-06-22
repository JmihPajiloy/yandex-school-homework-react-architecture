export const generateReport = async (size?: number) => {
  const response = await fetch(
    `http://localhost:3000/report?size=${size ?? 0.1}`,
  );

  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
  }

  const data = await response.text();
  const blob = new Blob([data], { type: "text/csv" });
  return URL.createObjectURL(blob);
};
