import { styled } from "@/src/styles";

export const Container = styled('div', {
  display: 'flex',
  gap: 16,

})

export const BoxImage = styled('div', {
  width: 96,
  height: 96,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

  img: {
    objectFit: 'contain',
    width: 'inherit',
    height: 'inherit',
  }
})

export const BoxContent = styled('div', {
  padding: '6px 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '& > h2': {
    fontSize: '$md',
    fontWeight: 'regular',
    color: '$gray300'
  },

  '& > span': {
    fontSize: '$md',
    fontWeight: 'bold',
    color: '$gray100',
  },

  '& > button': {
    width: 'fit-content',
    fontSize: '$sm',
    fontWeight: 'bold',
    color: '$green500',
    cursor: 'pointer',
    transition: 'color 0.2s',

    background: 'transparent',
    border: 'none',

    '&:hover': {
      color: '$green300',
    }
  },
})


