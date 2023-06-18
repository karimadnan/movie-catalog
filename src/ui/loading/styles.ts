import { Typography, styled } from '@mui/material'

const StyledSearchLoader = styled(Typography)(({ theme }) => ({
  width: '80%',
  [theme.breakpoints.up('md')]: {
    width: '40%',
  },
}))

export { StyledSearchLoader }
