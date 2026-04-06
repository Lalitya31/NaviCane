import React from 'react'
import useSensors from '../hooks/useSensors'

const SensorPanel = () => {
  const { distance, light } = useSensors()
  return (
    <div className="panel sensor-panel">
      <h3>Sensor Data</h3>
      <div className="sensor-row">
        <div>
          <div className="sensor-label">Distance</div>
          <div className="sensor-value">{distance.toFixed(1)} cm</div>
        </div>
        <div>
          <div className="sensor-label">Light</div>
          <div className="sensor-value">{light.toFixed(0)} lx</div>
        </div>
      </div>
    </div>
  )
}

export default SensorPanel
