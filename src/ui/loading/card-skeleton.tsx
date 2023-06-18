'use client'

import {
  CardActionArea,
  CardContent,
  Skeleton,
  Typography,
} from '@mui/material'
import { StyledCard } from '../common/styles'
import { cardHeight } from '../constants'

export default function SkeletonCard() {
  return (
    <StyledCard>
      <CardActionArea>
        <Skeleton height={cardHeight} animation="wave" variant="rectangular" />
        <CardContent>
          <Typography component="div" variant="body1">
            <Skeleton />
          </Typography>
          <Typography component="div" variant="caption">
            <Skeleton width="40%" />
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  )
}
