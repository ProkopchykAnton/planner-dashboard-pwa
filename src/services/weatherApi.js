export async function fetchWeather() {
  // Київ (поки без геолокації)
  const lat = 50.45;
  const lon = 30.52;

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

  const res = await fetch(url);
  if (!res.ok) throw new Error('Weather fetch failed');

  const data = await res.json();
  return data.current_weather;
}
