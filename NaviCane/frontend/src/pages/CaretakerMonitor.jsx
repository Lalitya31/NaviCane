import React from 'react'

export default function CaretakerMonitor() {
  return (
    <div className="caretaker-page">
      <div className="page-header">
        <div>
          <h2 style={{color:'#7C3AED'}}>Caretaker Monitor</h2>
          <p className="muted">Monitoring 0 users</p>
        </div>
      </div>

      <div className="cards" style={{maxWidth:900}}>
        <div style={{display:'flex',gap:14}}>
          <div className="stat-card card" style={{flex:1}}>
            <div className="stat-title">Monitored Users</div>
            <div className="stat-value">0</div>
            <div className="muted">Active connections</div>
          </div>
          <div className="stat-card card" style={{flex:1}}>
            <div className="stat-title">Active Alerts</div>
            <div className="stat-value">0</div>
            <div className="muted">Require attention</div>
          </div>
          <div className="stat-card card" style={{flex:1}}>
            <div className="stat-title">System Status</div>
            <div className="stat-value" style={{color:'var(--success)'}}>Online</div>
            <div className="muted">All systems operational</div>
          </div>
        </div>

        <div className="card" style={{marginTop:18}}>
          <h4>Monitored Users</h4>
          <div className="placeholder muted">No Users to Monitor<br/><small>You haven't been linked to any users yet.</small></div>
        </div>
      </div>
    </div>
  )
}
