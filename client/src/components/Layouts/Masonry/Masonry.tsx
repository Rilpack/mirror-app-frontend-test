import styles from './Masonry.module.scss'
import { Post } from '@/typescript/interfaces'
import { Card } from '@/components/Card/Card'

export const Masonry = ({ columnsData }: { columnsData: Post[][] }) => {
  return (
    <div className={styles.masonry}>
      {columnsData.map((items, colIndex) => (
        <div key={colIndex} className={styles.masonry_column}>
          {items.map((post, rowIndex) => (
            <Card post={post} key={rowIndex} />
          ))}
        </div>
      ))}
    </div>
  )
}