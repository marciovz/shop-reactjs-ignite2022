import { X } from 'phosphor-react'

import { Button } from '../../Button'
import { CartItem } from '../CartItem'

import { Container, ButtonCloseContainer, Header, ListItem, Footer } from './styles'

interface CartModalProps {
  isOpen: boolean
  closeCartModal: () => void
}

export function CartModal({isOpen, closeCartModal}: CartModalProps) {
  function handleClickClose() {
    closeCartModal()
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
        <CartItem 
          title="Camiseta Beyond the Limits" 
          imageUrl="/_next/image?url=https%3A%2F%2Ffiles.stripe.com%2Flinks%2FMDB8YWNjdF8xTk5iZElEZDY4RTBYbklyfGZsX3Rlc3RfanB3c29BbDBnM3BHOGhaWE45OTQwTDEy00bhDNz4Jx&w=1080&q=75"
        />

        <CartItem 
          title="Camiseta Beyond the Limits" 
          imageUrl="/_next/image?url=https%3A%2F%2Ffiles.stripe.com%2Flinks%2FMDB8YWNjdF8xTk5iZElEZDY4RTBYbklyfGZsX3Rlc3RfanB3c29BbDBnM3BHOGhaWE45OTQwTDEy00bhDNz4Jx&w=1080&q=75"
        />

        <CartItem 
          title="Camiseta Beyond the Limits" 
          imageUrl="/_next/image?url=https%3A%2F%2Ffiles.stripe.com%2Flinks%2FMDB8YWNjdF8xTk5iZElEZDY4RTBYbklyfGZsX3Rlc3RfanB3c29BbDBnM3BHOGhaWE45OTQwTDEy00bhDNz4Jx&w=1080&q=75"
        />

        <CartItem 
          title="Camiseta Beyond the Limits" 
          imageUrl="/_next/image?url=https%3A%2F%2Ffiles.stripe.com%2Flinks%2FMDB8YWNjdF8xTk5iZElEZDY4RTBYbklyfGZsX3Rlc3RfanB3c29BbDBnM3BHOGhaWE45OTQwTDEy00bhDNz4Jx&w=1080&q=75"
        />
        
      </ListItem>

      <Footer>
        <div>
          <p>Quantidade</p>
          <span>3 itens</span>
        </div>
        
        <div>
          <p>Valor total</p>
          <span>R$ 270,00</span>
        </div>
        
        <Button title="Finalizar compra" style={{ marginTop: 36 }} />
      </Footer>
    </Container>
  )
}