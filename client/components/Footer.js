import React from 'react'
import {
  ContactItem,
  FooterCatalog,
  FooterContactSection,
  FooterInfoForUsers, FooterPaid, FooterPaidItem,
  FooterRootInfo,
  PageFooter,
  PageFooterContainer
} from '../styles/footer'
import { contacts, forClients, navMenu } from '../variables'
import Logo from '../components/generic/Logo'
import VisaIcon from "../static/images/visa_icon.svg"
import MasterCard from "../static/images/mastercard_icon.svg"
import Link from 'next/link'

export default function Footer () {
  return (
    <PageFooter>
      <PageFooterContainer>
        <FooterRootInfo>
          <Logo>LOGO</Logo>
          <FooterPaid>
            <FooterPaidItem src={VisaIcon} alt=""/>
            <FooterPaidItem src={MasterCard} alt=""/>
          </FooterPaid>
          <br/>
          <p>&copy; Copyright by http://semena.in.ua</p>
        </FooterRootInfo>
        <FooterCatalog>
          <h4>Каталог</h4>
          <ul>
            {navMenu.map(item =>
              <div key={item.id}>
                <Link href={item.link}>{item.name}</Link>
              </div>)}
          </ul>
        </FooterCatalog>
        <FooterInfoForUsers>
          <h4>Клиентам</h4>
          <ul>
            {forClients.map(item =>
              <div key={item.id}>
                <Link href={item.link}>{item.name}</Link>
              </div>)}
          </ul>
        </FooterInfoForUsers>
        <FooterContactSection>
          <h4>Контакты</h4>
          <ul>
            {contacts.map(item => <ContactItem>{item}</ContactItem>)}
          </ul>
        </FooterContactSection>
      </PageFooterContainer>
      <br/>
    </PageFooter>
  )
}