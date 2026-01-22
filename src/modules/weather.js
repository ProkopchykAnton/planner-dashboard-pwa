import { getCoords, fetchHourlyWeather12h } from '../services/weatherApi.js';

function formatHour(iso) {
  const d = new Date(iso);
  const hh = String(d.getHours()).padStart(2, '0');
  return `${hh}:00`;
}

export async function initWeather(valueId, listId) {
  const valueEl = document.getElementById(valueId);
  const listEl = document.getElementById(listId);
  if (!valueEl || !listEl) return;

  valueEl.textContent = 'Loading…';
  listEl.innerHTML = '';

  try {
    const { lat, lon, label } = await getCoords();
    const { currentTemp, hours } = await fetchHourlyWeather12h(lat, lon);

    valueEl.textContent =
      typeof currentTemp === 'number' ? `${Math.round(currentTemp)}°C` : '--';

    listEl.innerHTML = hours
      .map(
        (h) => `
          <div class="row">
            <div>${formatHour(h.time)}</div>
            <div class="badge">${Math.round(h.temp)}°C</div>
          </div>
        `
      )
      .join('');

    // маленький підпис (в мутед залишив у main, але можна додати тут)
    valueEl.title = label;
  } catch (e) {
    valueEl.textContent = '—';
    listEl.innerHTML = `<div class="muted">Weather error</div>`;
  }
}
