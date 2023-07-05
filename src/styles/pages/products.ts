import { styled } from '../index'

export const ProductContainer = styled('div', {
  margin: '0 auto',
  width: 1180,
  height: '100vh',

  display: 'flex',
  flexDirection: 'column',
})

export const WrapperContent = styled('div',{
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
})

export const ProductContent = styled('main', {
  height: 'fit-content',

  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '4rem',
})

export const ImageContainer = styled('div', {
  width: '100%',
  height: 565,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)'  ,
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  }

})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300'
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green300',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: '1.6',
    color: '$gray300',
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300'
    }
  }

})
