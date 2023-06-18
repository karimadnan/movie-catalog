import { InputBase, alpha, styled } from '@mui/material'

const StyledSearchBar = styled('div')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.9),
  },
  width: '80%',
  [theme.breakpoints.up('md')]: {
    width: '40%',
  },
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  caretColor: theme.palette.secondary.main,
  width: '90%',
  [theme.breakpoints.down('lg')]: {
    width: '80%',
  },
}))

export { StyledSearchBar, StyledInputBase }
