import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import Stripe from 'stripe'
import { stripe } from '@/src/lib/stripe'

import { ImageContainer, ProductContainer, ProductDetails } from '@/src/styles/pages/products'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useState } from 'react'
import { Button } from '@/src/components/Button'

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
  }
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  const { isFallback } = useRouter()

  if ( isFallback) {
    return <p>Loading ...</p>
  }

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      })

      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl
    } catch (error) {
      // Conectar com uma ferramenta de observabilidade (Datadog / Sentry)
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
        <meta name="robot" content="noindex" />
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product?.imageUrl} width={520} height={480} alt=""/>
        </ImageContainer>

        <ProductDetails>
          <h1>{ product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <Button title="Comprar agora" disabled={isCreatingCheckoutSession} onClick={handleBuyProduct} />
        </ProductDetails>
      </ProductContainer>
    </>

  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_O9vjUEg7PE7cAh' }}
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string}> = async ({ params }) => {
  const productId = params!.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount! / 100),
        description: product.description,
        defaultPriceId: price.id
      },
      revalidate: 60 * 60 * 1,
    }
  }
}