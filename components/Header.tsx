import styles from '@/styles/Header.module.css'

interface HeaderProps {
  onViewAnalytics: () => void
  onRefreshData: () => void
  isLoading: boolean
}

export default function Header({ onViewAnalytics, onRefreshData, isLoading }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        LeetCode Analytics <span className={styles.highlight}>Dashboard</span>
      </h1>
      <p className={styles.subtitle}>
        Comprehensive analytics and insights for your coding journey. Track progress, analyze
        performance, and discover growth opportunities.
      </p>
      
      <div className={styles.controls}>
        <div className={styles.dataSource}>
          <span className={styles.statusIndicator}></span>
          <span>Data source: Firebase Database (Synced)</span>
        </div>
        <button 
          className={`${styles.btn} ${styles.btnPrimary}`}
          onClick={onViewAnalytics}
        >
          <i className="fas fa-chart-bar"></i>
          View Analytics
        </button>
        <button 
          className={`${styles.btn} ${styles.btnSecondary}`}
          onClick={onRefreshData}
          disabled={isLoading}
        >
          <i className={`fas ${isLoading ? 'fa-spinner fa-spin' : 'fa-sync-alt'}`}></i>
          {isLoading ? 'Refreshing...' : 'Refresh Data'}
        </button>
      </div>
    </header>
  )
}
