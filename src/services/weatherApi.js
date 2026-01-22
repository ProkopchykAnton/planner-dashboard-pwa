export async function getCoords() {
  // fallback: Kyiv
  const fallback = { lat: 50.4501, lon: 30.5234, label: 'Kyiv' };

  if (!('geolocation' in navigator)) return fallback;

  try {
    const pos = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        timeout: 7000,
        maximumAge: 5 * 60 * 1000,
      });
    });

    return {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude,
      label: 'Your location',
    };
  } catch {
    return fallback;
  }
}

export async function fetchHourlyWeather12h(lat, lon) {
  const url =
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${encodeURIComponent(lat)}` +
    `&longitude=${encodeURIComponent(lon)}` +
    `&hourly=temperature_2m` +
    `&current_weather=true` +
    `&timezone=auto`;

  const res = await fetch(url);
  if (!res.ok) throw new Error('Weather fetch failed');

  const data = await res.json();

  const currentTemp = data?.current_weather?.temperature;
  const times = data?.hourly?.time ?? [];
  const temps = data?.hourly?.temperature_2m ?? [];

  const nowIso = data?.current_weather?.time;
  const startIndex = nowIso ? times.indexOf(nowIso) : 0;

  const hours = [];
  for (let i = 0; i < 12; i++) {
    const idx = Math.max(0, startIndex) + i;
    if (!times[idx]) break;
    hours.push({ time: times[idx], temp: temps[idx] });
  }

  return { currentTemp, hours };
}
