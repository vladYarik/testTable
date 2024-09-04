
import styles from './styles.module.scss'
interface ITitle{
    text:string
}

function Title({text}:ITitle) {
  return (
    <div className={styles.title}>
        {text}
    </div>
  )
}

export default Title
