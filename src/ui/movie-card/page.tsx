'use client'

import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { StyledCard } from '@/ui/common/stylesmovie-catalog'
import { cardHeight } from '@/ui/constantsmovie-catalog'
import { type MovieCardDetails } from '@/app/common-typesmovie-catalog'

export default function MovieCard({
  imgPath,
  title,
  releaseDate,
}: MovieCardDetails) {
  return (
    <StyledCard>
      <CardActionArea>
        <CardMedia
          component="img"
          height={cardHeight}
          image={imgPath}
          alt={`${title}-movie-poster`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" noWrap>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {releaseDate}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  )
}
