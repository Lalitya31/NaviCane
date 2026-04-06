import React, { useState } from 'react'
import { CONFIG } from '../services/config'

export default function MainStatus({ onLogout }) {
  const [status, setStatus] = useState('safe') // 'safe' | 'obstacle' | 'fall'
  const [connected, setConnected] = useState(true)

  const statusLabel = {
    safe: 'Safe',
    obstacle: 'Obstacle',
    fall: 'Fall'
  }[status]

  return (
    <div className="main-status">
      <div style={{display:'flex', gap:20, alignItems:'center'}}>
        <div className={`status-circle ${status==='safe'? 'status-green': status==='obstacle'? 'status-orange':'status-red'}`}>
          {statusLabel}
        </div>
        <div style={{display:'flex', flexDirection:'column', gap:12}}>
          <div style={{display:'flex', gap:8}}>
            <div style={{width:18,height:18,borderRadius:9,background:'#22C55E'}}></div>
            <div style={{width:18,height:18,borderRadius:9,background:'#FB923C'}}></div>
            <div style={{width:18,height:18,borderRadius:9,background:'#EF4444'}}></div>
          </div>
          <label style={{display:'flex',alignItems:'center',gap:8}}>
            <input type="checkbox" checked={connected} onChange={() => setConnected(c => !c)} />
            <span style={{color: connected? 'var(--success)': 'var(--muted)'}}>Stick Connected</span>
          </label>
        </div>
      </div>

      <div style={{marginTop:24}}>
        <button className="sos-btn">⚠️ SOS</button>
      </div>

      <div style={{marginTop:32}} className="bottom-nav">
        <button>Map</button>
        <button>Settings</button>
        <button onClick={onLogout}>Exit</button>
      </div>
    </div>
  )
}
