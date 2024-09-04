import { Report } from '@mui/icons-material'
import styles from './ErrorBanner.module.scss'

interface IErrorBanner{
    errorText:string
}

function ErrorBanner({errorText}:IErrorBanner) {
  return (
    <div className={styles.banner}>
        <Report style={{color:'red',fontSize:62}}/>
        {errorText}
    </div>
  )
}

export default ErrorBanner
