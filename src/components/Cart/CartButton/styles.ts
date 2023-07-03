import { styled } from '../../../styles/index'

export const ButtonContainer = styled('button', {
  position: 'relative',
  width: 'fit-content',
  padding: 12,

  lineHeight: 0,
  color: '$gray400',

  background: '$gray800',
  border: 'none',
  borderRadius: 6,
  cursor: 'pointer',
  transition: 'opacity 0.2s',

  '&:hover': {
    opacity: 0.6,
  },

  span: {
    width: 24,
    height: 24,

    position: 'absolute',
    top: '-12px',
    right: '-12px',
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    fontSize: 14,
    fontWeight: 'bold',
    color: '$white',

    boxSizing: 'content-box',
    backgroundColor: '$green500',
    border: '3px solid $gray900',
    borderRadius: '50%',
  }
})

