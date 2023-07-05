// http://localhost:3000/success?session_id=cs_test_a1XUv2XewtpX6KO19y2OpTr8FuLLieM8CzoPNRxGKGggngFTDQvnWMzGwP

import { GetServerSideProps } from "next"
import Image from 'next/image'
import Head from "next/head"
import { Stripe } from "stripe"

import { stripe } from "@/src/lib/stripe"

import logoImg from '@/src/assets/logo.svg'

import { SuccessContainer, LogoLink, ImageContainer, ImageBox, LinkGoHome } from "../styles/pages/success"

interface SuccessProps {
  customerName: string;
  product: {
    name: string;
    imageUrl: string;
  }
}

export default function Success({ customerName, product }: SuccessProps) {
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
          <ImageBox>
            <Image src={product.imageUrl} width={130} height={130} alt="" />
          </ImageBox>

          <ImageBox>
            <Image src={product.imageUrl} width={130} height={130} alt="" />
          </ImageBox>

          <ImageBox>
            <Image src={product.imageUrl} width={130} height={130} alt="" />
          </ImageBox>
        </ImageContainer>

        <h1>Compra efetuada!</h1>

        <p>Uhuul <strong>{customerName}</strong>, sua <strong>{product.name}</strong> já está a caminho da sua casa.</p>

        <LinkGoHome href="/">
          Voltar ao catálogo
        </LinkGoHome>

      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query, params }) => {

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

  const customerName = session.customer_details?.name;
  const product = session.line_items?.data[0].price?.product as Stripe.Product

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      }
    }
  }
}
