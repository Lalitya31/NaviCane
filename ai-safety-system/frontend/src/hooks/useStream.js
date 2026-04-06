import { useState, useEffect } from 'react'

export default function useStream(rtspUrl) {
  const [connected, setConnected] = useState(false)

  useEffect(() => {
    // Placeholder: in future, establish WebRTC/HLS connection to RTSP gateway
    const t = setTimeout(() => setConnected(true), 500)
    return () => clearTimeout(t)
  }, [rtspUrl])

  return { connected }
}
