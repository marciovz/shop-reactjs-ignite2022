
import { ReactNode, createContext, useContext, useEffect, useMemo, useState } from 'react'

interface ProductCart {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
}

interface CartContextData {
  productsCart: ProductCart[]
  quantityItems: number
  total: number
  AddProduct: (product: ProductCart) => void
}

const CartContext = createContext({} as CartContextData)

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [ productsCart, setProductsCart ] = useState<ProductCart[]>([])

  const quantityItems = productsCart.length

  const total = useMemo(() => {
    return productsCart.reduce((acc, product) => {
      return acc + product.price
    }, 0)
  },[productsCart])

  function AddProduct(product: ProductCart) {
    setProductsCart(state => [...state, product])
  }

  useEffect(() => {
    console.log(productsCart)
  }, [productsCart])

  return (
    <CartContext.Provider value={{
      productsCart,
      quantityItems,
      total,
      AddProduct,
    }}>
      { children }
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}