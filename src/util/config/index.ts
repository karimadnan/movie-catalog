import { type Movie } from '@/app/common-typesmovie-catalog'

const remapMoviesData = (movies: Movie[]) =>
  movies.map((movie) => {
    const clonedMovie = structuredClone(movie)
    // w500 stands for the image size check https://developer.themoviedb.org/docs/image-basics
    clonedMovie.backdrop_path = `${process.env.API_IMAGE_BASE_URL}/w500/${movie.backdrop_path}`

    const dateToMlliseconds = new Date(movie.release_date).valueOf()
    clonedMovie.release_date = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'medium',
    }).format(dateToMlliseconds)

    return clonedMovie
  })

export { remapMoviesData }
