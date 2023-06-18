'use client'

import { getMovieDetails } from '@/api/moviesmovie-catalog'
import { type MovieDetailsProps } from '@/app/movie/[movieId]/typesmovie-catalog'
import { useQuery } from '@tanstack/react-query'
import { Typography } from '@mui/material'
import { constructImageURL } from '@/util/configmovie-catalog'
import {
  StyledMovieContainer,
  StyledMovieDetailsContainer,
} from '@/ui/common/stylesmovie-catalog'
import { movieDetailsPoster } from '@/ui/constantsmovie-catalog'
import { StyledImage } from './styles'

export default function Movie({ params }: MovieDetailsProps) {
  const { data } = useQuery({
    queryKey: ['movie-details'],
    queryFn: () => getMovieDetails(params.movieId),
  })

  const {
    poster_path: posterImg = '',
    title = '',
    release_date: releaseDate,
    genres = [],
    tagline = '',
    overview = '',
  } = data ?? {}

  const moviePoaster = constructImageURL('w300', posterImg)

  const releaseYear = releaseDate?.split('-')[0]

  const genresKeys = genres.map((genre) => genre.name).join(', ')
  return (
    <StyledMovieContainer>
      <StyledImage
        src={moviePoaster}
        alt={`${title}-poster`}
        width={movieDetailsPoster.width}
        height={movieDetailsPoster.height}
        loading="lazy"
      />
      <StyledMovieDetailsContainer>
        <Typography
          variant="h3"
          fontWeight="900"
          display="inline"
          marginRight={1}
        >
          {title}
        </Typography>
        <Typography variant="h4" display="inline" color="text.secondary">
          ({releaseYear})
        </Typography>
        <Typography marginTop={1} marginLeft={1}>
          {releaseDate} - {genresKeys}.
        </Typography>
        <Typography
          marginTop={5}
          marginLeft={1}
          fontStyle="italic"
          color="text.secondary"
          fontWeight="900"
        >
          {tagline}
        </Typography>
        <Typography variant="h5" fontWeight="900" marginLeft={1} marginTop={5}>
          Overview
        </Typography>
        <Typography variant="subtitle1" marginLeft={1} marginTop={2}>
          {overview}
        </Typography>
      </StyledMovieDetailsContainer>
    </StyledMovieContainer>
  )
}
