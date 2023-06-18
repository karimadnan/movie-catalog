import { styled } from '@mui/material'
import Image from 'next/image'

const StyledImage = styled(Image)(({ theme }) => ({
  objectFit: 'contain',
  borderRadius: theme.shape.borderRadius,
}))

const StyledMovieContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(0, 25),
}))

const StyledMovieDetailsContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 5),
}))

export { StyledImage, StyledMovieContainer, StyledMovieDetailsContainer }
