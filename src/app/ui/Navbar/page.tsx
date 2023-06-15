'use client'

import { Toolbar } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import { StyledTypography } from './style'

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <StyledTypography variant="h5" noWrap>
          Movie Catalog
        </StyledTypography>
      </Toolbar>
    </AppBar>
  )
}
