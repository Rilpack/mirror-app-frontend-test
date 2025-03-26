import styles from './MainLayout.module.scss'
import { Sidebar } from '@/components/Sidebar/Sidebar'
import { Outlet } from 'react-router'
import { useContextProvider } from "@/app"

export const MainLayout = () => {
  const { settings, refetch } = useContextProvider()

  return (
    <div className={styles.layout}>
      <Sidebar settings={settings} refetch={refetch} />
      <Outlet />
    </div>
  )
}