import { InputBase, alpha, styled } from '@mui/material'

const StyledContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(10, 0),
}))

const StyledSearchBar = styled('div')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.9),
  },
  width: '90%',
  [theme.breakpoints.up('md')]: {
    width: '40%',
  },
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '70%',
  caretColor: theme.palette.secondary.main,
}))

export { StyledContainer, StyledSearchBar, StyledInputBase }
