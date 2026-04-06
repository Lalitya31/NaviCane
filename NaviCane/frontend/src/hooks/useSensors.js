import { useState, useEffect } from 'react'

export default function useSensors() {
  const [distance, setDistance] = useState(120)
  const [light, setLight] = useState(300)

  useEffect(() => {
    const id = setInterval(() => {
      setDistance(d => Math.max(5, d + (Math.random() * 10 - 5)))
      setLight(l => Math.max(0, l + (Math.random() * 40 - 20)))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return { distance, light }
}
