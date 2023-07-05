import type { AppProps } from 'next/app'

import { globalStyles } from '@/src/styles/global'
import { CartProvider } from '@/src/context/cartContext';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}
