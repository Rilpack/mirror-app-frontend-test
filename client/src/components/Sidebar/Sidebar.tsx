import { Button } from '@/components/Elements/Button/Button'
import styles from './Sidebar.module.scss'
import { Setting } from '../Elements/Setting/Setting'

export const Sidebar = () => {
  return (
    <div className={styles.container}>
      <Button />
      <div className={styles.container_settings}>
        {[0, 1, 2, 3, 4, 5].map((_, index) => (
          <div className={styles.container_settings_section}>
            <Setting />
            {[0, 1, 2, 3, 4, 5].length - 1 !== index && <div className={styles.line} />}
          </div>
        ))}
      </div>
    </div>
  )
}