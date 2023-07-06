import { useState } from 'react'
import { X } from 'phosphor-react'
import axios from 'axios'

import { Button } from '../../Button'
import { CartItem } from '../CartItem'

import { Container, ButtonCloseContainer, Header, EmptyCart, ListItem, Footer } from './styles'

interface CheckoutItemsData {
  id: string
  price: string
  quantity:number
}

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

  function mountCheckoutItems() {
    const checkoutProductItems = productsCart.reduce((acc, productItem) => {
      const index = acc.findIndex(accItem => accItem.id === productItem.id)

      if(index < 0) {
        acc.push({
          id: productItem.id,
          price: productItem.defaultPriceId,
          quantity: 1
        })
      }else {
        acc[index].quantity = acc[index].quantity + 1
      }

      return acc
    }, [] as CheckoutItemsData[])

    const checkoutItems = checkoutProductItems.map(checkoutItem => ({
      price: checkoutItem.price,
      quantity: checkoutItem.quantity
    }))

    return checkoutItems
  }

  async function handleBuyProduct() {

   try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        checkoutItems: mountCheckoutItems(),
      }) 
      
      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl
    } catch (error) {
      console.log(error)
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout!')
    }
  }

  const isEmptyCart = productsCart.length === 0
  
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
        {isEmptyCart ? (
          <EmptyCart>
            <p>Você não possui produtos em seu carrinho</p>
          </EmptyCart>
        ) : (
          productsCart?.map(productItem => (
            <CartItem
              key ={productItem.itemId}
              product={productItem}
              removeItem={() => removeProduct(productItem.itemId)}
            />
          ))
        )

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
        
        <Button 
          title="Finalizar compra" 
          style={{ marginTop: 36 }} 
          disabled={isEmptyCart}
          onClick={handleBuyProduct}
        />
      </Footer>
    </Container>
  )
}