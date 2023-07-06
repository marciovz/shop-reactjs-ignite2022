import { styled } from '../../../styles/index'

export const Container = styled('div', {
  padding: 48,
  width: 480,

  position: 'absolute',
  top: 0,
  bottom: 0,
  variants: {
    isOpen: {
      true: { right: 0 },
      false:{ right: '-490px' },
    }
  },
  zIndex: 1,

  display: 'flex',
  flexDirection: 'column',

  background: '$gray800',
  transition: 'all 0.3s',

  overflow: 'hidden',
})

export const ButtonCloseContainer = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',

  button: {
    fontWeight: 'bold',
    color: '$gray400',
    lineHeight: 0,
    
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',

    '&:hover': {
      opacity: 0.6,
    }
  },
})

export const Header = styled('div', {
  marginTop: 24,

  h1: {
    fontSize: 20,
    fontWeight: 'bold',
  }
})

export const EmptyCart = styled('div', {
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',

  p: {
    fontSize: '1.2rem',
  }
})

export const ListItem = styled('div', {
  marginTop: 24,

  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  gap: 20,

  overflowY: 'auto',

  '&::-webkit-scrollbar': {
    width: 8,
  },
  
  '&::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 5px #8D8D99',
    borderRadius: 4,
  },
  
  '&::-webkit-scrollbar-thumb': {
    background: '$gray400',
    borderRadius: 4,
  },
})

export const Footer = styled('footer', {
  marginTop: 16,

  div: {
    marginBottom: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  'div:first-child': {
    p: {
      fontSize: 16,
      fontWeight: 'regular',
    },
    span: {
      fontSize: 18,
      fontWeight: 'regular',
    },
  },

  'div:nth-child(2)': {
    p: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    span: {
      fontSize: 24,
      fontWeight: 'bold',
    },
  },
})