import { type Movie } from '@/app/common-typesmovie-catalog'

const formateDateMedium = (date: string) => {
  const dateToMlliseconds = new Date(date).valueOf()
  const format = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
  }).format(dateToMlliseconds)
  return format
}

const constructImageURL = (size: string, path: string) =>
  `${process.env.API_IMAGE_BASE_URL}/${size}${path}`

const remapMoviesData = (movies: Movie[]) =>
  movies.map((movie) => {
    const clonedMovie = structuredClone(movie)
    // w500 stands for the image size, check https://developer.themoviedb.org/docs/image-basics
    clonedMovie.backdrop_path = constructImageURL(
      'w500',
      clonedMovie.backdrop_path
    )
    clonedMovie.release_date = formateDateMedium(movie.release_date)
    return clonedMovie
  })

export { remapMoviesData, formateDateMedium, constructImageURL }
