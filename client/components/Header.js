import React, { useState } from 'react'
import {
  AuthContainer, AuthContainerItem,
  CartContainer,
  CartResults,
  HeaderAdaptiveItem,
  HeaderAdaptiveMenu,
  HeaderAdaptiveMenuLogo,
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
import Auth from '../components/Auth'
import { AuthModal } from '../styles/authPage'
import SectionParagraph from '../components/generic/SectionParagraph'

export default function Header () {
  const [showMenu, setShowMenu] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)

  const openAuthModal = () => {
    setShowAuthModal(true)
  }

  const closeAuthModal = (e) => {
    console.log(e.target.className)
    if (e.target.className === "Modal-sc-wnhraa-0 authPage__AuthModal-sc-8vyp5j-0 qthTD eemceD") {
      setShowAuthModal(!showAuthModal)
    } else {
      return;
    }
  }

  const openMenu = () => {
    setShowMenu(true)
  }

  const closeMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <PageHeader>
      <HeaderContainer>
        {
          showAuthModal ?
            <AuthModal onClick={closeAuthModal}>
              <Auth/>
            </AuthModal> : null
        }
        {
          showMenu ?
            <div onClick={closeMenu}>
              <Modal>
                <HeaderAdaptiveMenu>
                  <HeaderAdaptiveMenuLogo><Link href="/">Logo</Link></HeaderAdaptiveMenuLogo>
                  {navMenu.map(item =>
                    <div key={item.id}>
                      <HeaderAdaptiveItem href={item.link}>{item.name}</HeaderAdaptiveItem>
                    </div>)}
                </HeaderAdaptiveMenu>
              </Modal>
            </div>
          : null
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
          <AuthContainer>
            <AuthContainerItem onClick={openAuthModal}>Войти</AuthContainerItem>
          </AuthContainer>
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