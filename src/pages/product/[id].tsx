import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Head from 'next/head'
import Stripe from 'stripe'

import { useCart } from '@/src/context/cartContext'
import { stripe } from '@/src/lib/stripe'
import { Header } from '@/src/components/Header'
import { Button } from '@/src/components/Button'
import Loading from '@/src/components/Loading'
import { formatPrice } from '@/src/utils/formatPrice'

import { 
  ProductContainer, 
  WrapperContent, 
  ProductContent, 
  ImageContainer, 
  ProductDetails 
} from '@/src/styles/pages/products'

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    formattedPrice: string,
    description: string;
    defaultPriceId: string;
  }
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter()
  const { addProduct } = useCart()

  function handleAddToCart() {
    addProduct(product)
  }

  return (
    <>
      <Head>
        <title>{product?.name} | Ignite Shop</title>
        <meta name="robot" content="noindex" />
      </Head>

      <ProductContainer>
        <Header />

        <WrapperContent>
          {isFallback ? (
            <Loading />
          ) : (
            <ProductContent>
              <ImageContainer>
                <Image src={product?.imageUrl} width={520} height={480} alt=""/>
              </ImageContainer>

              <ProductDetails>
                <h1>{ product.name}</h1>
                <span>{product.formattedPrice}</span>

                <p>{product.description}</p>

                <Button 
                  title="Colocar na sacola" 
                  onClick={handleAddToCart} 
                />
              </ProductDetails>

            </ProductContent>
          )}
        </WrapperContent>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
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
        price:price.unit_amount,
        formattedPrice: formatPrice(price.unit_amount! / 100),
        description: product.description,
        defaultPriceId: price.id
      },
      revalidate: 60 * 60 * 1,
    }
  }
}