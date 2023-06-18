import { Card, styled } from '@mui/material'
import Link from 'next/link'

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
}))

const StyledLink = styled(Link)(() => ({
  textDecoration: 'none',
}))

export { StyledCard, StyledLink }
