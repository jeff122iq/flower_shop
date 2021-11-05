import React from 'react'
import {
  CartContainer, CartResults,
  HeaderContainer,
  HeaderNav,
  HeaderNavItem,
  PageHeader, ResponsiveMenuButton,
  RootHeaderSection
} from '../styles/header'
import Logo from '../components/generic/Logo'
import { navMenu } from '../variables'
import Search from '../components/generic/Search'

export default function Header () {
  return (
    <PageHeader>
      <HeaderContainer>
        <RootHeaderSection>
          <ResponsiveMenuButton className="fas fa-bars"/>
          <Logo>Logo</Logo>
          <Search type={"search"} placeholder={"Search"}/>
          <CartContainer>
            <i className="fas fa-shopping-cart"/>
            <p>Корзина</p>
            <CartResults>3</CartResults>
          </CartContainer>
        </RootHeaderSection>
        <HeaderNav>
          { navMenu.map(item =>
            <div key={item.id}>
              <HeaderNavItem href={item.link}>{item.name}</HeaderNavItem>
            </div>) }
        </HeaderNav>
      </HeaderContainer>
    </PageHeader>
  )
}