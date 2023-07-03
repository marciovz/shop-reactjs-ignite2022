import Link from 'next/link'
import Image from 'next/image'

import logoImg from '../../assets/logo.svg'

import { HeaderContainer } from "./styles"
import { CartButton } from '../CartButton'

export function Header() {
  return (
    <HeaderContainer>
      <Link href={'/'}>
        <Image src={logoImg} alt="" />
      </Link>

      <CartButton />
  </HeaderContainer>
  )
}