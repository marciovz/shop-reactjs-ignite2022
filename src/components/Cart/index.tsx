import { useState } from 'react';
import { useCart } from '@/src/context/cartContext';

import { CartButton } from "./CartButton";
import { CartModal } from "./CartModal";

export function Cart() {
  const [isOpen, setIsOpen] = useState(false);

  const { productsCart, quantityItems, FormattedTotal, removeProduct  } = useCart()

  function openCartModal() {
    setIsOpen(true);
  }
  
  function closeCartModal() {
    setIsOpen(false);
  }
  return (
    <>
      <CartButton quantity={quantityItems} openCartModal={openCartModal}/>
      <CartModal
        productsCart={productsCart}
        quantity={quantityItems}
        formattedTotal={FormattedTotal}
        removeProduct={removeProduct}
        isOpen={isOpen} 
        closeCartModal={closeCartModal} 
      />
    </>
  )
}