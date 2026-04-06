import React from 'react'
import useAlerts from '../hooks/useAlerts'

const AlertPanel = () => {
  const { alerts } = useAlerts()
  return (
    <div className="panel alert-panel">
      <h3>Alerts</h3>
      <ul className="alerts-list">
        {alerts.length === 0 && <li className="muted">No alerts</li>}
        {alerts.map((a, i) => (
          <li key={i} className={`alert-item ${a.level}`}>
            <div className="alert-time">{new Date(a.ts).toLocaleTimeString()}</div>
            <div className="alert-msg">{a.msg}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AlertPanel
