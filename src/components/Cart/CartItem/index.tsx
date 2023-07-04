import Image from 'next/image'

import { Container, BoxImage, BoxContent } from "./styles"

interface CartItemProps {
  title: string
  imageUrl: string
}

export function CartItem({ title, imageUrl }: CartItemProps) {

  return (
    <Container>
      <BoxImage>
        <Image src={imageUrl} width={96} height={96} alt="" />
      </BoxImage>
      <BoxContent>
        <h2>{title}</h2>
        <span>R$ 79.90</span>
        <button>Remover</button>
      </BoxContent>
    </Container>
  )
}