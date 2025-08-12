import { useEffect, useState } from 'react'
import { SectionData } from '@/data/sectionsData'
import styles from '@/styles/SectionCard.module.css'

interface SectionCardProps {
  section: SectionData
  onClick: () => void
  delay: number
}

export default function SectionCard({ section, onClick, delay }: SectionCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValue, setAnimatedValue] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      animateValue(0, section.value, 1000)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay, section.value])

  const animateValue = (start: number, end: number, duration: number) => {
    const startTime = performance.now()
    
    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(start + (end - start) * easeOut)
      
      setAnimatedValue(current)
      
      if (progress < 1) {
        requestAnimationFrame(update)
      }
    }
    
    requestAnimationFrame(update)
  }

  return (
    <div 
      className={`${styles.card} ${isVisible ? styles.visible : ''}`}
      onClick={onClick}
    >
      <div className={`${styles.cardIcon} ${styles[section.iconClass]}`}>
        <i className={section.icon}></i>
      </div>
      <div className={styles.cardContent}>
        <h3>{section.title}</h3>
        <div className={styles.cardValue}>{animatedValue}</div>
        <div className={styles.cardLabel}>{section.label}</div>
      </div>
    </div>
  )
}
