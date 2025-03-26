import styles from './Card.module.scss'
import likeIcon from '@/assets/svg/like.svg'
import commentIcon from '@/assets/svg/comment.svg'

export const Card = () => {
  return (
    <div className={styles.card}>
      <p className={styles.card_title}>Text text text text text text text</p>
      <div className={styles.card_bottom}>
        <div className={styles.card_bottom_user}>
          <b>Josh Banisher</b>
          <span>25/09/2025</span>
        </div>
        <div className={styles.card_bottom_stats}>
          <div className={styles.card_bottom_stats_section}>
            <p>245</p>
            <img src={likeIcon} alt='likeIcon' />
          </div>
          <div className={styles.card_bottom_stats_section}>
            <p>768</p>
            <img src={commentIcon} alt='commentIcon' />
          </div>
        </div>
      </div>
    </div>
  )
}