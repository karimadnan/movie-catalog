'use client'

import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { StyledCard } from '@/app/ui/common/stylesmovie-catalog'
import { cardHeight } from '@/app/ui/constantsmovie-catalog'
import { type MovieCardDetails } from './types'

export default function MovieCard({
  imgPath,
  title,
  releaseDate,
}: //   id,
MovieCardDetails) {
  // w500 stands for the image size check https://developer.themoviedb.org/docs/image-basics
  const constructCardImageURL = `${process.env.API_IMAGE_BASE_URL}/w500/${imgPath}`

  const dateToMlliseconds = new Date(releaseDate).valueOf()
  const formateDate = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
  }).format(dateToMlliseconds)

  return (
    <StyledCard>
      <CardActionArea>
        <CardMedia
          component="img"
          height={cardHeight}
          image={constructCardImageURL}
          alt={`${title}-movie-poster`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" noWrap>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {formateDate}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  )
}
