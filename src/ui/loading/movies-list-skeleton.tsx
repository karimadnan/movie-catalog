'use client'

import CardSkeleton from '@/ui/loading/card-skeletonmovie-catalog'
import { Skeleton } from '@mui/material'
import { StyledSearchLoader } from './styles'
import styles from '../common/global.module.css'

export default function MoviesListSkeleton({
  withSearch = false,
}: {
  withSearch?: boolean
}) {
  const cardsSkeleton = Array.from({ length: 20 }, (_, index) => (
    <CardSkeleton key={index} />
  ))
  return (
    <>
      {withSearch && (
        <div className={styles.searchContainer}>
          <StyledSearchLoader variant="h3">
            <Skeleton />
          </StyledSearchLoader>
        </div>
      )}
      <div className={styles.moviesListGrid}>{cardsSkeleton}</div>
    </>
  )
}
