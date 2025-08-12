import { SectionData } from '@/data/sectionsData'
import styles from '@/styles/AnalyticsModal.module.css'

interface AnalyticsModalProps {
  data: SectionData[]
  onClose: () => void
}

export default function AnalyticsModal({ data, onClose }: AnalyticsModalProps) {
  const totalSections = data.length
  const totalDataPoints = data.reduce((sum, section) => sum + section.value, 0)
  const averagePerformance = Math.round(totalDataPoints / totalSections)
  const topPerformer = data.reduce((max, section) => 
    section.value > max.value ? section : max
  )

  return (
    <>
      <div className={styles.modalOverlay} onClick={onClose}></div>
      <div className={styles.analyticsModal}>
        <div className={styles.modalHeader}>
          <h2>Analytics Overview</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={styles.modalBody}>
          <p>📊 Total Sections Active: {totalSections} (A through Q)</p>
          <p>📈 Average Performance: {averagePerformance}%</p>
          <p>🎯 Top Performing Section: {topPerformer.title} ({topPerformer.value} points)</p>
          <p>🔥 Most Active Category: {topPerformer.label}</p>
          <p>⚡ Quick Stats: {totalDataPoints.toLocaleString()} total data points tracked</p>
        </div>
      </div>
    </>
  )
}
