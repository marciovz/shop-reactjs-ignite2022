import { Handbag } from "phosphor-react";

import { ButtonContainer } from './styles'

export function CartButton() {

  return (
    <ButtonContainer>
      <Handbag size={24} weight="bold"/>
      <span>1</span>
    </ButtonContainer>
  )
}
