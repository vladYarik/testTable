import { CircularProgress } from '@mui/material'
import styles from './LoadingBanner.module.scss'

function LoadingBanner() {
  return (
    <div className={styles.banner}>
        <CircularProgress color="primary" />
    </div>
  )
}

export default LoadingBanner
