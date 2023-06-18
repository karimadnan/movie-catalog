import { styled } from '@mui/material'
import Image from 'next/image'

const StyledImage = styled(Image)(({ theme }) => ({
  objectFit: 'contain',
  borderRadius: theme.shape.borderRadius,
}))

export { StyledImage }
