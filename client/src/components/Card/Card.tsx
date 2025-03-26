import styles from './Card.module.scss'
import likeIcon from '@/assets/svg/like.svg'
import commentIcon from '@/assets/svg/comment.svg'
import { Post } from '@/typescript/interfaces'
import { useFormatDate } from '@/hooks/useFormatDate'
import { useContextProvider } from '@/app'

export const Card = ({ post }: { post: Post }) => {
  const { settings } = useContextProvider()
  const formatDate = useFormatDate(post.date);

  return (
    <div className={settings?.template === "hover" ? styles.card_hover : styles.card}>
      <p className={styles.card_title}>{post.caption}</p>
      <div className={styles.card_bottom}>
        <div className={styles.card_bottom_user}>
          <b>{post.user.username}</b>
          <span>{formatDate}</span>
        </div>
        <div className={styles.card_bottom_stats}>
          <div className={styles.card_bottom_stats_section}>
            <p>{post.likes}</p>
            <img src={likeIcon} alt='likeIcon' />
          </div>
          <div className={styles.card_bottom_stats_section}>
            <p>{post.comments}</p>
            <img src={commentIcon} alt='commentIcon' />
          </div>
        </div>
      </div>
    </div >
  )
}