import React from 'react'

const StatusBadge = ({ active = true }) => {
  return (
    <span className={`status-badge ${active ? 'active' : 'inactive'}`}>
      {active ? 'Active' : 'Inactive'}
    </span>
  )
}

export default StatusBadge
