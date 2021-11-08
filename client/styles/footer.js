import styled from 'styled-components'
import Container from '../components/generic/Container'

export const PageFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ebebeb;  
  padding: 30px 0 60px;
  color: #707070;
  @media screen and (max-width: 768px) {
    margin: 0 50px !important;
  }
`

export const FooterPaid = styled.div`
  width: 100%;
  max-width: 6.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FooterPaidItem = styled.img`
  margin: 0;
  padding: 0;
  width: 3.75rem;
`

export const PageFooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const FooterCatalog = styled.div`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 425px) {
    display: none;
  }
`

export const FooterRootInfo = styled(FooterCatalog)`
  display: block;
  p {
    font-size: 10px;
  }
`

export const FooterInfoForUsers = styled(FooterCatalog)`
  display: block;
`

export const FooterContactSection = styled(FooterCatalog)`
  display: block;
`

export const ContactItem = styled.li`
  font-size: 10px;
`