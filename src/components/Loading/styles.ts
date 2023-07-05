import { styled, keyframes } from '@/src/styles'

const spinner = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  }
})

export const Container = styled('div', {
  minHeight: '5rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const Content = styled('div', {
  width: 50,
  height: 50,
  border: `10px solid $gray100`,
  borderTop: `10px solid $gray400`,
  borderRadius: '50%',
  animation: `${spinner} 1s linear infinite`,
})