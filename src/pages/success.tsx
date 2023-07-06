import { GetServerSideProps } from "next"
import Image from 'next/image'
import Head from "next/head"
import { Stripe } from "stripe"

import { stripe } from "@/src/lib/stripe"

import logoImg from '@/src/assets/logo.svg'

import { SuccessContainer, LogoLink, ImageContainer, ImageBox, LinkGoHome } from "../styles/pages/success"

interface ProductData {
  id: string
  imageUrl: string
}

interface SuccessProps {
  customerName: string;
  products: ProductData[],
  totalItems: number
}

export default function Success({ customerName, products, totalItems }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Success | Ignite Shop</title>
      </Head>

      <SuccessContainer>
        
        <LogoLink href={'/'}>
          <Image src={logoImg} width={130} alt="" />
        </LogoLink>

        <ImageContainer>
          {products.map(product => (
            <ImageBox key={product.id}>
              <Image src={product.imageUrl} width={130} height={130} alt="" />
            </ImageBox>
          ))}
        </ImageContainer>

        <h1>Compra efetuada!</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra 
          {totalItems > 0 && ( totalItems === 1 ? ' de 1 camiseta ': ` de ${totalItems} camisetas `) } 
          já está a caminho da sua casa.
        </p>

        <LinkGoHome href="/">
          Voltar ao catálogo
        </LinkGoHome>

      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id);
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })
  
  const products = session.line_items?.data.map(dataItem => {
    const quantity = dataItem.quantity || 0

    const productItem = dataItem.price?.product as Stripe.Product
    return {
      id: productItem.id,
      imageUrl: productItem?.images[0],
      quantity,
    }
  }) 
  
  const customerName = session.customer_details?.name;
  const totalItems = products?.reduce((acc, productItem) => {
    acc = acc + productItem.quantity
    return acc
  }, 0)

  return {
    props: {
      customerName,
      products,
      totalItems,
    }
  }
}
