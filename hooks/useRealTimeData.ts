import { useState, useEffect } from 'react'
import { SectionData } from '@/data/sectionsData'

export function useRealTimeData(initialData: SectionData[]) {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => 
        prevData.map(section => {
          // Random chance to update a value
          if (Math.random() > 0.9) {
            const variation = Math.floor(Math.random() * 3) - 1 // -1, 0, or 1
            return {
              ...section,
              value: Math.max(0, section.value + variation)
            }
          }
          return section
        })
      )
    }, 10000) // Update every 10 seconds

    return () => clearInterval(interval)
  }, [])

  return data
}
