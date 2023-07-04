import { useState } from 'react';

import { CartButton } from "./CartButton";
import { CartModal } from "./CartModal";

export function Cart() {
  const [isOpen, setIsOpen] = useState(true);

  function openCartModal() {
    setIsOpen(true);
  }
  
  function closeCartModal() {
    setIsOpen(false);
  }
  return (
    <>
      <CartButton openCartModal={openCartModal}/>
      <CartModal isOpen={isOpen} closeCartModal={closeCartModal} />
    </>
  )
}