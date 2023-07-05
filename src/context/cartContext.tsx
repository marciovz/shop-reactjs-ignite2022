
import { ReactNode, createContext, useContext, useMemo, useState } from 'react'

import { formatPrice } from '../utils/formatPrice'

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  formattedPrice: string,
  defaultPriceId: string;
}

interface ProductCart extends Product {
  itemId: string;
}

interface CartContextData {
  productsCart: ProductCart[]
  quantityItems: number
  FormattedTotal: string
  addProduct: (product: Product) => void
  removeProduct: (itemId: string) => void
}

interface CartProviderProps {
  children: ReactNode
}

const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [ productsCart, setProductsCart ] = useState<ProductCart[]>([])

  const quantityItems = productsCart.length

  const FormattedTotal = useMemo(() => {
    const total =  productsCart.reduce((acc, product) => {
      return acc + product.price
    }, 0)
    return formatPrice(total / 100)
  },[productsCart])

  function addProduct(product: Product) {
    setProductsCart(state => [
      ...state, 
      {
        ...product,    
        itemId: crypto.randomUUID(),
      }
    ])
  }

  function removeProduct(itemId: string) {
    const updatedProductsCart = productsCart.filter(cartItem => cartItem.itemId !== itemId)
    setProductsCart([...updatedProductsCart])
  }

  return (
    <CartContext.Provider value={{
      productsCart,
      quantityItems,
      FormattedTotal,
      addProduct,
      removeProduct,
    }}>
      { children }
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}