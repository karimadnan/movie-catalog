'use client'

import LiveTvIcon from '@mui/icons-material/LiveTv'
import { Toolbar } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import { StyledNavbarTitle } from './style'

export default function Navbar() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <LiveTvIcon color="secondary" fontSize="large" />
        <StyledNavbarTitle
          variant="h6"
          noWrap
          sx={{
            ml: 2,
            fontWeight: 700,
            letterSpacing: '.3rem',
          }}
        >
          Movie Catalog
        </StyledNavbarTitle>
      </Toolbar>
    </AppBar>
  )
}
