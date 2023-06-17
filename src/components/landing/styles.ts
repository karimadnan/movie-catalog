import { InputBase, alpha, styled } from '@mui/material'
import emotionStyled from '@emotion/styled'

const StyledContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 0, 7, 0),
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

const StyledMovieCardsContainer = emotionStyled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 10px;
`

export {
  StyledContainer,
  StyledSearchBar,
  StyledInputBase,
  StyledMovieCardsContainer,
}
