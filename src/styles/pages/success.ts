import { styled } from ".."
import Link from "next/link"

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  h1: {
    marginTop: '3.6rem',
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    marginTop: '1.3rem',
    maxWidth: 560,

    fontSize: '$xl',
    color: '$gray300',
    textAlign: 'center',
  },
})

export const LogoLink = styled(Link, {
  marginTop: '4rem',
})

export const ImageContainer = styled('div', {
  marginTop: '6.5rem',
  display: 'flex',
})

export const ImageBox = styled('div', {
  width: 130,
  height: 130,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '50%',
  boxShadow: '0 0 10px #202024',

  '& + &': {
    marginLeft: '-45px',
  },

  img: {
    objectFit: 'cover',
    width: 'inherit',
    height: 'inherit',
  }
})

export const LinkGoHome = styled(Link, {
  marginTop: '5rem',
  padding: '0.5rem',
  display: 'block',
  
  fontSize: '$lg',
  color: '$green500',
  textDecoration: 'none',
  transition: 'color 0.2s',

  '&:hover': {
    color: '$green300',
  }
})
