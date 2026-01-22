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
      </section>

      <section class="card">
        <h2>Weather</h2>
        <div id="weather" class="value">--</div>
      </section>

      <section class="card">
        <h2>Calendar</h2>
        <div id="calendar" class="muted">Next step…</div>
      </section>
    </div>
  </div>
`;

initClock('clock');
initWeather('weather');
initCalendar('calendar');
