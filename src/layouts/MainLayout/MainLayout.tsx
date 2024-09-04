import React from 'react'
import styles from './styles.module.scss'



interface IMainLayout{
  children:React.ReactNode
}

const MainLayout = ({children}:IMainLayout) => {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  )
}
export default MainLayout;
