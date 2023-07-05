import Image from 'next/image'

import { Container, BoxImage, BoxContent } from "./styles"

interface CartItemData {
  name: string
  imageUrl: string
  formattedPrice: string
}

interface CartItemProps {
  product: CartItemData
  removeItem: () => void
}

export function CartItem({ product, removeItem }: CartItemProps) {

  return (
    <Container>
      <BoxImage>
        <Image src={product.imageUrl} width={96} height={96} alt="" />
      </BoxImage>
      <BoxContent>
        <h2>{product.name}</h2>
        <span>{product.formattedPrice}</span>
        <button onClick={removeItem}>Remover</button>
      </BoxContent>
    </Container>
  )
}