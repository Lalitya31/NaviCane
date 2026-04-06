import React from 'react'

export default function Sidebar({ user='Caretaker', email='user@example.com', online=true, currentPage='dashboard', onNavigate }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="sidebar-logo">IoT Safety</div>
        <div className="user-box">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div>
              <div className="user-role muted">Logged in as</div>
              <div className="user-name">{user}</div>
              <div className="user-email muted">{email}</div>
            </div>
            <div className="role-badge">Caretaker</div>
          </div>
        </div>
      </div>

      <nav className="side-nav">
        <button className={`nav-item ${currentPage==='dashboard' ? 'active' : ''}`} onClick={() => onNavigate && onNavigate('dashboard')}>Monitor Dashboard</button>
        <button className={`nav-item ${currentPage==='caretaker' ? 'active' : ''}`} onClick={() => onNavigate && onNavigate('caretaker')}>Caretaker Monitor</button>
        <button className={`nav-item ${currentPage==='settings' ? 'active' : ''}`} onClick={() => onNavigate && onNavigate('settings')}>Settings</button>
      </nav>

      <div className="system-status">
        <div>System Status</div>
        <div style={{display:'flex',alignItems:'center',gap:8}}>
          <div className={`status-dot ${online? 'online': 'offline'}`}></div>
          <div className="muted">{online? 'Online' : 'Offline'}</div>
        </div>
      </div>

      <div className="sidebar-bottom">
        <button className="logout">Logout</button>
      </div>
    </aside>
  )
}
