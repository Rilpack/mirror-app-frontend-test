import styles from './Pagination.module.scss'
import ReactPaginate from 'react-paginate'
import { Button } from '../Elements/Button/Button'
import { useContextProvider } from '@/app'

interface IPagination {
  pageCount: number,
  handleFetchPostsMore: () => void
  handlePageClick: (event: { selected: number; }) => void
}

export const Pagination = ({ pageCount, handleFetchPostsMore, handlePageClick }: IPagination) => {
  const { settings } = useContextProvider()

  return (
    <div className={styles.navigation}>
      {settings?.navigation === 'load-more'
        ? <Button title='Загрузить ещё' onClick={handleFetchPostsMore} />
        : <ReactPaginate
          containerClassName={styles.pagination}
          activeClassName={styles.pagination_active}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={3}
          previousLabel="<"
          nextLabel=">"
          breakLabel="..."
        />
      }
    </div>
  )
}