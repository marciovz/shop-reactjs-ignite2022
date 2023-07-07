import { createStitches } from '@stitches/react';

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme
} = createStitches({
  theme: {
    colors: {
      white: '#FFF',

      gray900: '#121214',
      gray800: '#202024',
      gray400: '#8D8D99',
      gray300: '#C4C4CC',
      gray100: '#E1E1E6',

      green500: '#00875F',
      green300: '#00F37E',
    },
    fontSizes: {
      xm: '0.875rem',
      sm: '1rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    }
  }
})
