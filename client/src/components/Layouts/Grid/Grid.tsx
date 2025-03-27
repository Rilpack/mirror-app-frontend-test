import styles from './Grid.module.scss'
import { Post } from '@/typescript/interfaces'
import { Card } from '@/components/Card/Card'

export const Grid = ({ columnsData }: { columnsData: Post[][] }) => {
  const columnsCount = columnsData.length
  const posts = columnsData.flat()

  return (
    <div className={styles.grid} style={{ gridTemplateColumns: `repeat(${columnsCount}, 1fr)` }}>
      {posts.map((post, index) => (
        <Card key={index} post={post} />
      ))}
    </div>
  )
}