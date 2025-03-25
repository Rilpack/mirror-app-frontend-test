import styles from './Setting.module.scss'

export const Setting = ({ title, value }: { title: string, value: string | number }) => {
  return (
    <div className={styles.setting}>
      <b>{title}</b>
      <span>{value}</span>
    </div>
  )
}