import styles from './HomePage.module.scss'
import { useEffect } from 'react'
import { useContextProvider } from '@/app'
import { Card } from '@/components/Card/Card'
import { usePosts } from '@/hooks/requests/useGetPosts'

export const HomePage = () => {
  const { settings } = useContextProvider()

  const columns = settings?.layout?.params?.masonry?.columns || 0
  const rows = settings?.layout?.params?.masonry?.rows || 0

  const { posts, fetchPosts } = usePosts({ limit: columns * rows });

  const columnsData = Array.from({ length: columns }, (_, colIndex) =>
    posts.slice(colIndex * rows, colIndex * rows + rows)
  )

  useEffect(() => {
    fetchPosts();
  }, [settings])

  return (
    <div className={styles.page}>
      <div className={styles.page_content}>
        {columnsData.map((items, colIndex) => (
          <div key={colIndex} className={styles.column}>
            {items.map((post, rowIndex) => (
              <Card post={post} key={rowIndex} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}