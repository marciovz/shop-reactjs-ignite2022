import { useState } from 'react'
import { X } from 'phosphor-react'
import axios from 'axios'

import { Button } from '../../Button'
import { CartItem } from '../CartItem'

import { Container, ButtonCloseContainer, Header, ListItem, Footer } from './styles'

interface ProductCartData {
  itemId: string,
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  formattedPrice: string,
  defaultPriceId: string;
}

interface CartModalProps {
  productsCart: ProductCartData[]
  quantity: number
  formattedTotal: string
  removeProduct: (itemId: string) => void
  isOpen: boolean
  closeCartModal: () => void

}

export function CartModal({productsCart, quantity, formattedTotal, removeProduct, isOpen, closeCartModal}: CartModalProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)


  function handleClickClose() {
    closeCartModal()
  }

  async function handleBuyProduct() {
   try {
      //setIsCreatingCheckoutSession(true)

      // const response = await axios.post('/api/checkout', {
      //   priceId: product.defaultPriceId,
      // }) 
      // const { checkoutUrl } = response.data
      // window.location.href = checkoutUrl
    } catch (error) {
      // Conectar com uma ferramenta de observabilidade (Datadog / Sentry)
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout!')
    }
  }
  
  return (
    <Container isOpen={isOpen} >
      <ButtonCloseContainer>
        <button onClick={handleClickClose}>
          <X size={32} />
        </button>
      </ButtonCloseContainer>

      <Header>
        <h1>Sacola de Compras</h1>
      </Header>

      <ListItem>
        {
          productsCart?.map(productItem => (
            <CartItem
              key ={productItem.itemId}
              product={productItem}
              removeItem={() => removeProduct(productItem.itemId)}
            />
          ))
        }       
      </ListItem>

      <Footer>
        <div>
          <p>Quantidade</p>
          <span>{quantity === 1 ? '1 item' : `${quantity} items` }</span>
        </div>
        
        <div>
          <p>Valor total</p>
          <span>{formattedTotal}</span>
        </div>
        
        <Button title="Finalizar compra" style={{ marginTop: 36 }} />
      </Footer>
    </Container>
  )
}