import styles from './Button.module.scss'

export const Button = ({ onClick, title }: { onClick: () => void, title: string }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {title}
    </button>
  )
}