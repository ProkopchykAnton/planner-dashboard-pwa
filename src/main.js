import './style.css';

import { initClock } from './modules/clock.js';
import { initWeather } from './modules/weather.js';
import { initCalendar } from './modules/calendar.js';

document.getElementById('app').innerHTML = `
  <div class="container">
    <h1>Planner Dashboard</h1>

    <div class="grid">
      <section class="card">
        <h2>Time</h2>
        <div id="clock" class="value">--:--:--</div>
        <div class="muted">Live</div>
      </section>

      <section class="card">
        <h2>Weather</h2>
        <div id="weather" class="value">--</div>
        <div id="weather-hours" class="list"></div>
        <div class="muted">Open-Meteo (next 12h)</div>
      </section>

      <section class="card">
        <h2>Calendar</h2>
        <div id="calendar" class="list"></div>
        <div class="muted">public/events.json</div>
      </section>
    </div>
  </div>
`;

initClock('clock');
initWeather('weather', 'weather-hours');
initCalendar('calendar');
