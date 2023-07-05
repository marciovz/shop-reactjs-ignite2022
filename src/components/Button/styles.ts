import { styled } from '../../styles/index'

export const ButtonContainer = styled('button', {
  padding: '1.25rem',
  width: '100%',

  fontSize: '$md',
  fontWeight: 'bold',
  color: '$white',
  cursor: 'pointer',

  backgroundColor: '$green500',
  border: 0,
  borderRadius: 8,
  transition: 'background 0.2s',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$green300'
  }
})

