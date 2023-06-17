'use client'

import { styled } from '@mui/material'

const StyledApp = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: '100vh',
}))

export { StyledApp }
