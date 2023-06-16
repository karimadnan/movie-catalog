'use client'

import LiveTvIcon from '@mui/icons-material/LiveTv'
import { Toolbar } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import { StyledTypography } from './style'

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <LiveTvIcon color="secondary" fontSize="large" />
        <StyledTypography
          variant="h6"
          noWrap
          sx={{
            ml: 2,
            fontWeight: 700,
            letterSpacing: '.3rem',
          }}
        >
          Movie Catalog
        </StyledTypography>
      </Toolbar>
    </AppBar>
  )
}
