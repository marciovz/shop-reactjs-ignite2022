import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { useKeenSlider } from 'keen-slider/react'

import { stripe } from "../lib/stripe";
import { limiText } from "../utils/limitText";
import { formatPrice } from "../utils/formatPrice";

import 'keen-slider/keen-slider.min.css'
import { HomeContainer, Product } from "../styles/pages/home";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      { products.map(product => {
        return (
          <Product 
            key={product.id} 
            href={`/product/${product.id}`}
            prefetch={false}
            className="keen-slider__slide"
          >
            <Image src={product.imageUrl} alt="" width={520} height={480} />
            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>
        )
      })}
    </HomeContainer>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const priceStripe = product.default_price as Stripe.Price
    
    const price = priceStripe.unit_amount && priceStripe.unit_amount !== 0
      ? priceStripe.unit_amount / 100
      : 0
  
    return {
      id: product.id,
      name: limiText(product.name, 26),
      imageUrl: product.images[0],
      price: formatPrice(price)
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 horas
  }
}