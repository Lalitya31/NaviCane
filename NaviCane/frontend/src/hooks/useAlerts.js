import { useState, useEffect } from 'react'
import useSensors from './useSensors'
import { CONFIG } from '../services/config'
import { sendAlertToCloud } from '../services/cloud'

export default function useAlerts() {
  const { distance } = useSensors()
  const [alerts, setAlerts] = useState([])

  useEffect(() => {
    const threshold = CONFIG.DISTANCE_THRESHOLD || 30
    if (distance < threshold) {
      const a = { ts: Date.now(), msg: `Object too close (${distance.toFixed(1)} cm)`, level: 'critical' }
      setAlerts(prev => [a, ...prev].slice(0, 50))
      if (CONFIG.CLOUD_ENABLED) sendAlertToCloud(a)
    }
  }, [distance])

  return { alerts }
}
