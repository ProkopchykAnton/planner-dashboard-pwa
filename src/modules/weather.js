export function initWeather(targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.textContent = 'Weather module not implemented yet';
}

import { fetchWeather } from '../services/weatherApi.js';

export async function initWeather(targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;

  el.textContent = 'Loading weather…';

  try {
    const weather = await fetchWeather();
    el.textContent = `${weather.temperature}°C`;
  } catch (e) {
    el.textContent = 'Weather error';
  }
}
