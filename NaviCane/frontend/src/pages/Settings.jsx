import React, { useState } from 'react'

export default function Settings() {
  const [role, setRole] = useState('caretaker')

  return (
    <div className="settings-page">
      <div className="page-header">
        <div>
          <h2>Settings</h2>
          <p className="muted">Configure your profile and device</p>
        </div>
      </div>

      <div className="cards" style={{maxWidth:900}}>
        <div className="card">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div>
              <h4>Account Role</h4>
              <div className="muted">Select your primary role in the system</div>
            </div>
            <div style={{width:180}}>
              <select value={role} onChange={e => setRole(e.target.value)} style={{width:'100%',padding:'10px',borderRadius:8,border:'1px solid rgba(15,23,42,0.06)'}}>
                <option value="caretaker">Caretaker (Monitor Others)</option>
                <option value="user">User (Monitored Person)</option>
              </select>
            </div>
          </div>

          <div className="info-card" style={{marginTop:12}}>
            <strong>Caretaker Role Features:</strong>
            <ul>
              <li>Monitor multiple users who have linked you</li>
              <li>View real-time sensor data from all linked users</li>
              <li>Receive emergency alerts and notifications</li>
              <li>Review alert history and sensor trends</li>
              <li>Access location and device information</li>
            </ul>
          </div>

          <div style={{marginTop:12}}>
            <button className="btn save-role">Save Role</button>
          </div>
        </div>

        <div className="card">
          <h4>Caretaker Mode</h4>
          <p className="muted">As a caretaker, you don't need to configure any devices. Users will link you to their accounts, and you'll be able to monitor them from your Caretaker Dashboard.</p>
        </div>

        <div className="card">
          <h4>Setup Instructions</h4>
          <ol>
            <li>Select Your Role</li>
            <li>Configure devices if you're a monitored user</li>
            <li>Link caretakers by sharing the invite code</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
