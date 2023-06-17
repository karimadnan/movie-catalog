import { Card, styled } from '@mui/material'

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
}))

export { StyledCard }
