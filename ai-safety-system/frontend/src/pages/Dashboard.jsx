import React from 'react'
import VideoFeed from '../components/VideoFeed'
import SensorPanel from '../components/SensorPanel'
import AlertPanel from '../components/AlertPanel'

const Dashboard = () => {
  return (
    <div className="dashboard-grid">
      <div className="left">
        <VideoFeed />
      </div>
      <div className="right">
        <SensorPanel />
        <AlertPanel />
      </div>
    </div>
  )
}

export default Dashboard
