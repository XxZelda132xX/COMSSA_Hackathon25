import './App.css'

const devices = [
  {
    id: 'rover-alpha',
    label: 'Rover Alpha',
    status: 'On route to Illeret',
    battery: 82,
    temperature: '36°C',
    eta: '04:12'
  },
  {
    id: 'rover-bravo',
    label: 'Rover Bravo',
    status: 'Holding at North Ridge (wind)',
    battery: 64,
    temperature: '33°C',
    eta: '—'
  },
  {
    id: 'drone-echo',
    label: 'Drone Echo',
    status: 'Recon pass over Dukana',
    battery: 54,
    temperature: '31°C',
    eta: '00:18'
  },
  {
    id: 'runner',
    label: 'Emergency runner',
    status: 'Idle (standby)',
    battery: 'N/A',
    temperature: '29°C',
    eta: '—'
  }
]

const keyHighlights = [
  {
    title: 'Interactive map',
    detail: 'React + Leaflet shell ready for device markers, weather layers, and demand pulses.'
  },
  {
    title: 'Simulation loop',
    detail: 'JavaScript-friendly layout for time-step updates and path planning visualisation.'
  },
  {
    title: 'Device roster',
    detail: 'Rovers, drones, and runner slots with quick-glance status and battery levels.'
  }
]

const missionLog = [
  'Wind picked up in the north-east corridor at t+15 min.',
  'Rover Alpha rerouted around volcanic ridge (A* placeholder).',
  'Drone Echo cleared to launch—battery and heat within thresholds.',
  'Demand spike detected near Kalacha; queueing urgent resupply.'
]

function App() {
  return (
    <div className="page">
      <header className="hero">
        <div>
          <p className="eyebrow">Marsabit response sandbox</p>
          <h1>React + JavaScript launchpad</h1>
          <p className="lede">
            A lightweight front-end scaffold for mapping rovers, drones, and runners—ready to
            plug into a simulation loop, weather noise, and pathfinding visuals.
          </p>
          <div className="badge-row">
            <span className="badge">React</span>
            <span className="badge">Leaflet-ready</span>
            <span className="badge">Hackathon-fast</span>
          </div>
        </div>
        <div className="summary">
          <div>
            <p className="label">Map mode</p>
            <p className="value">Satellite / terrain</p>
          </div>
          <div>
            <p className="label">Devices tracked</p>
            <p className="value">4 live</p>
          </div>
          <div>
            <p className="label">Next tick</p>
            <p className="value">in 5s</p>
          </div>
        </div>
      </header>

      <main className="grid">
        <section className="panel map">
          <div className="panel-header">
            <div>
              <p className="label">Map canvas</p>
              <h2>Marsabit operational view</h2>
            </div>
            <div className="controls">
              <button type="button">Step simulation</button>
              <button type="button" className="ghost">Reset paths</button>
            </div>
          </div>
          <div className="map-placeholder">
            <p>
              Drop in <strong>React-Leaflet</strong> here to render basemaps, device markers, and
              weather overlays. This placeholder keeps sizing and padding ready.
            </p>
            <div className="map-grid" aria-hidden>
              {Array.from({ length: 48 }).map((_, index) => (
                <span key={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="panel device-panel">
          <div className="panel-header">
            <div>
              <p className="label">Device roster</p>
              <h2>Rovers, drones, runner</h2>
            </div>
            <p className="meta">Live telemetry stream placeholder</p>
          </div>
          <div className="device-list">
            {devices.map((device) => (
              <article key={device.id} className="device-card">
                <div>
                  <p className="label">{device.id}</p>
                  <h3>{device.label}</h3>
                  <p className="status">{device.status}</p>
                </div>
                <div className="telemetry">
                  <div>
                    <p className="label">Battery</p>
                    <p className="value">{device.battery}%</p>
                  </div>
                  <div>
                    <p className="label">Exposure</p>
                    <p className="value">{device.temperature}</p>
                  </div>
                  <div>
                    <p className="label">ETA</p>
                    <p className="value">{device.eta}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="panel stack">
          <div className="panel-header">
            <div>
              <p className="label">Build notes</p>
              <h2>Simulation-ready checklist</h2>
            </div>
            <p className="meta">Drop-in libraries listed below</p>
          </div>
          <ul className="highlight-list">
            {keyHighlights.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </li>
            ))}
          </ul>
          <div className="log">
            <div className="panel-header">
              <div>
                <p className="label">Mission log</p>
                <h3>Recent simulation ticks</h3>
              </div>
              <p className="meta">Great spot for socket updates</p>
            </div>
            <ol>
              {missionLog.map((entry, index) => (
                <li key={entry}>
                  <span className="bullet">t+{index * 5}m</span>
                  <p>{entry}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
