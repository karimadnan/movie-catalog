'use client'

import { Skeleton, Typography } from '@mui/material'
import {
  StyledMovieContainer,
  StyledMovieDetailsContainer,
} from '../common/styles'
import { movieDetailsPoster } from '../constants'

export default function MovieDetailsSkeleton() {
  return (
    <StyledMovieContainer>
      <Skeleton
        width={movieDetailsPoster.width}
        height={movieDetailsPoster.height}
        sx={{ borderRadius: 1 }}
        animation="wave"
        variant="rectangular"
      />
      <StyledMovieDetailsContainer>
        <Typography variant="h3" component="div" width="60%">
          <Skeleton />
        </Typography>
        <Typography component="div" width="40%" marginTop={1}>
          <Skeleton />
        </Typography>
        <Typography component="div" width="50%" marginTop={5} fontWeight="900">
          <Skeleton />
        </Typography>
        <Typography component="div" width="20%" variant="h5" marginTop={5}>
          <Skeleton />
        </Typography>
        <Typography component="div" variant="subtitle1" marginTop={2}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </Typography>
      </StyledMovieDetailsContainer>
    </StyledMovieContainer>
  )
}
