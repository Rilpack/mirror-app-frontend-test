import styles from './MainLayout.module.scss'
import { Sidebar } from '@/components/Sidebar/Sidebar'
import { useSettings } from '@/hooks/requests/useGetSettings';
import { Outlet } from 'react-router'

export const MainLayout = () => {
  const { settings, fetchSettings, loading, error } = useSettings();

  return (
    <div className={styles.layout}>
      <Sidebar settings={settings} fetchSettings={fetchSettings} />
      <Outlet />
    </div>
  )
}