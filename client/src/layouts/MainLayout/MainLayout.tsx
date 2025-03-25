import styles from './MainLayout.module.scss'
import { Sidebar } from '@/components/Sidebar/Sidebar'
import { Outlet } from 'react-router'

export const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <Outlet />
    </div>
  )
}