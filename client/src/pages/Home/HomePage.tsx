import styles from './HomePage.module.scss'
import { useEffect, useState } from 'react'
import { useContextProvider } from '@/app'
import { Card } from '@/components/Card/Card'
import { usePosts } from '@/hooks/requests/useGetPosts'
import { Pagination } from '@/components/Pagination/Pagination'
import { Post } from '@/typescript/interfaces'

export const HomePage = () => {
  const { settings } = useContextProvider()
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(1);

  const columns = settings?.layout?.params?.masonry?.columns || 1
  const rows = settings?.layout?.params?.masonry?.rows || 1
  const limit = columns * rows;
  const pageCount = Math.ceil(100 / limit);

  const { fetchPosts } = usePosts();

  const columnsData = Array.from({ length: columns }, () => [] as Post[]);

  posts.forEach((post, index) => {
    const columnIndex = index % columns;
    columnsData[columnIndex].push(post);
  });

  const loadPosts = async (newPage: number, append = false) => {
    try {
      const newPosts = await fetchPosts({ limit, page: newPage });
      setPosts(prev =>
        append ? [...prev, ...newPosts] : newPosts
      );
    } catch (err: any) {
      console.log(err.message || 'Ошибка при загрузке постов');
    } finally {
      console.log('')
    }
  };

  const handleFetchPostsMore = () => {
    setPage(page + 1);
    loadPosts(page + 1, true);
  };

  const handlePageClick = (event: { selected: number }) => {
    setPage(event.selected + 1);
    loadPosts(event.selected + 1, false);
  };

  useEffect(() => {
    setPage(1);
    setPosts([]);
    loadPosts(1);
  }, [settings]);

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
      {posts.length !== 100 &&
        <Pagination
          pageCount={pageCount}
          handleFetchPostsMore={handleFetchPostsMore}
          handlePageClick={handlePageClick} />}
    </div>
  )
}