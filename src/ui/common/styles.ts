import { Card, styled } from '@mui/material'
import Link from 'next/link'

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
}))

const StyledLink = styled(Link)(() => ({
  textDecoration: 'none',
}))

const StyledMovieContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.up('xl')]: {
    padding: theme.spacing(0, 25),
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

const StyledMovieDetailsContainer = styled('div')(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(10, 5),
}))

export {
  StyledCard,
  StyledLink,
  StyledMovieContainer,
  StyledMovieDetailsContainer,
}
