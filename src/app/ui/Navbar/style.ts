import { Typography, styled } from '@mui/material'

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
}))

export { StyledTypography }
