import { useState, useEffect } from 'react'
import Dashboard from '@/components/Dashboard'
import { sectionsData } from '@/data/sectionsData'

export default function Home() {
  const [data, setData] = useState(sectionsData)
  const [isLoading, setIsLoading] = useState(false)

  const handleRefreshData = async () => {
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Update data with random variations
    const updatedData = data.map(section => ({
      ...section,
      value: Math.max(0, section.value + Math.floor(Math.random() * 20) - 10)
    }))
    
    setData(updatedData)
    setIsLoading(false)
  }

  return (
    <Dashboard 
      data={data}
      onRefreshData={handleRefreshData}
      isLoading={isLoading}
    />
  )
}
