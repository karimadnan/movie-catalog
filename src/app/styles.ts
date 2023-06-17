'use client'

import { styled } from '@mui/material'

const StyledApp = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: '100vh',
  padding: theme.spacing(15, 3, 0, 3),
}))

export { StyledApp }
