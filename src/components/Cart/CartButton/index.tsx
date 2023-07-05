import { Handbag } from "phosphor-react";

import { ButtonContainer } from './styles'

interface CartButtonProps {
  quantity: number
  openCartModal: () => void
}

export function CartButton({quantity, openCartModal}: CartButtonProps) {

  function handleOpenModal() {
    openCartModal()
  }

  return (
    <ButtonContainer onClick={handleOpenModal}>
      <Handbag size={24} weight="bold"/>
      { quantity > 0 && <span>{quantity}</span>}
    </ButtonContainer>
  )
}
