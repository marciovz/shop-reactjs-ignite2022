import { ImageContainer, ProductContainer, ProductDetails } from '@/src/styles/pages/products'
import { useRouter } from 'next/router'

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,98</span>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione libero blanditiis, commodi officiis dolore facere architecto labore molestias laudantium eaque, placeat minus ducimus impedit non omnis nesciunt sapiente natus aliquid?</p>

        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}