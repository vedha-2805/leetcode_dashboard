import { useState } from 'react'
import Header from './Header'
import SectionCard from './SectionCard'
import AnalyticsModal from './AnalyticsModal'
import Notification from './Notification'
import { SectionData } from '@/data/sectionsData'
import styles from '@/styles/Dashboard.module.css'

interface DashboardProps {
  data: SectionData[]
  onRefreshData: () => void
  isLoading: boolean
}

export default function Dashboard({ data, onRefreshData, isLoading }: DashboardProps) {
  const [showModal, setShowModal] = useState(false)
  const [notification, setNotification] = useState<{
    message: string
    type: 'success' | 'error'
  } | null>(null)

  const handleCardClick = (section: SectionData) => {
    alert(`${section.title} Details:\n\nCategory: ${section.label}\nCount: ${section.value}\n\nClick OK to continue exploring the analytics.`)
  }

  const handleViewAnalytics = () => {
    setShowModal(true)
  }

  const handleRefresh = async () => {
    await onRefreshData()
    setNotification({
      message: 'Data refreshed successfully!',
      type: 'success'
    })
    setTimeout(() => setNotification(null), 3000)
  }

  return (
    <div className={styles.dashboard}>
      <Header 
        onViewAnalytics={handleViewAnalytics}
        onRefreshData={handleRefresh}
        isLoading={isLoading}
      />
      
      <main className={styles.mainContent}>
        <div className={styles.cardsGrid}>
          {data.map((section, index) => (
            <SectionCard
              key={section.id}
              section={section}
              onClick={() => handleCardClick(section)}
              delay={index * 100}
            />
          ))}
        </div>
      </main>

      {showModal && (
        <AnalyticsModal 
          data={data}
          onClose={() => setShowModal(false)}
        />
      )}

      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  )
}
