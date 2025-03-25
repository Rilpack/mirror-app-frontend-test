import styles from './MainLayout.module.scss'
import { Outlet } from 'react-router'

export const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <h1>Hi, world!</h1>
      <Outlet />
    </div>
  )
}