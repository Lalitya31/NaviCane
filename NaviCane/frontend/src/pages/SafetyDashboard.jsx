import React from 'react'
import Sidebar from '../components/Sidebar'
import CaretakerMonitor from './CaretakerMonitor'
import Settings from './Settings'

export default function SafetyDashboard({ page='dashboard', setPage }) {
  return (
    <div className="safety-page">
      <Sidebar user={'Lalitya'} email={'lalityadodla@gmail.com'} online={true} currentPage={page} onNavigate={p => setPage && setPage(p)} />

      <section className="main-col">
        {page === 'caretaker' ? (
          <CaretakerMonitor />
        ) : page === 'settings' ? (
          <Settings />
        ) : (
        <>
          <div className="page-header">
            <div>
              <h2>Safety Dashboard</h2>
              <p className="muted">Real-time monitoring and emergency alerts</p>
            </div>
          </div>

          <div className="cards">
          <div className="card emergency-card">
            <div className="card-head">
              <div>
                <h3>Emergency Alert System</h3>
                <p className="muted">Trigger emergency alert to notify all caretakers</p>
              </div>
            </div>

            <div className="emergency-body">
              <button className="send-alert">SEND EMERGENCY ALERT</button>

              <div className="info-box">
                <strong>How Alerts Work:</strong>
                <ul>
                  <li>Manual Alert: You trigger it - sends notification to all caretakers immediately</li>
                  <li>Auto Alert: Triggers automatically when object detected &lt; 50cm</li>
                  <li>Notifications: All connected caretakers receive real-time alerts</li>
                  <li>Device Buzzer: Controlled by device based on sensor readings</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card white-card"> <h4>Sensor Data</h4> <div className="placeholder muted">Waiting for sensor data...</div> </div>

          <div className="card white-card"> <h4>AI Object Detection</h4> <div className="placeholder muted">No objects detected</div> </div>

          <div className="card white-card"> <h4>Device Location</h4> <div className="placeholder muted">No device configured</div> </div>

          <div className="card white-card"> <h4>Connected Caretakers</h4> <div className="placeholder muted">No caretakers linked</div> </div>
          </div>
        </>
        )}
      </section>
    </div>
  )
}
