import React, { useState } from 'react'
import {
  CartContainer,
  CartResults, HeaderAdaptiveItem,
  HeaderAdaptiveMenu, HeaderAdaptiveMenuLogo,
  HeaderContainer,
  HeaderNav,
  HeaderNavItem,
  PageHeader,
  ResponsiveMenuButton,
  RootHeaderSection
} from '../styles/header'
import Logo from '../components/generic/Logo'
import { navMenu } from '../variables'
import Search from '../components/generic/Search'
import { Modal } from '../components/generic/Modal'
import Link from 'next/link'

export default function Header () {
  const [show, setShow] = useState(false)

  const openMenu = () => {
    setShow(true)
  }

  const closeMenu = () => {
    setShow(!show)
  }

  return (
    <PageHeader>
      <HeaderContainer>
        {
          show ?
            <div onClick={closeMenu}>
              <Modal>
                <HeaderAdaptiveMenu show={show}>
                  <HeaderAdaptiveMenuLogo><Link href="/">Logo</Link></HeaderAdaptiveMenuLogo>
                  {navMenu.map(item =>
                    <div key={item.id}>
                      <HeaderAdaptiveItem href={item.link}>{item.name}</HeaderAdaptiveItem>
                    </div>)}
                </HeaderAdaptiveMenu>
              </Modal>
            </div> : null
        }
        <RootHeaderSection>
          <ResponsiveMenuButton className="fas fa-bars" onClick={openMenu}/>
          <Logo><Link href="/">Logo</Link></Logo>
          <Search type={"search"} placeholder={"Search"}/>
          <CartContainer>
            <i className="fas fa-shopping-cart"/>
            <p>Корзина</p>
            <CartResults>3</CartResults>
          </CartContainer>
        </RootHeaderSection>
        <HeaderNav>
          {navMenu.map(item =>
            <div key={item.id}>
              <HeaderNavItem href={item.link}>{item.name}</HeaderNavItem>
            </div>)}
        </HeaderNav>
      </HeaderContainer>
    </PageHeader>
  )
}