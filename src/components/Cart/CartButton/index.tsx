import { Handbag } from "phosphor-react";

import { ButtonContainer } from './styles'

interface CartButtonProps {
  openCartModal: () => void
}

export function CartButton({openCartModal}: CartButtonProps) {

  function handleOpenModal() {
    openCartModal()
  }

  return (
    <ButtonContainer onClick={handleOpenModal}>
      <Handbag size={24} weight="bold"/>
      <span>1</span>
    </ButtonContainer>
  )
}
