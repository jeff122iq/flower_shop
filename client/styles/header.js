import styled from 'styled-components'
import Container from '../components/generic/Container'
import Logo from '../components/generic/Logo'

export const PageHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #488f08;
  position: relative;
`

export const ResponsiveMenuButton = styled.i`
  display: none;
  @media screen and (max-width: 1024px) {
    display: block;
    font-size: 30px;
    cursor: pointer;
    margin-right: 15px;
  }
  @media screen and (max-width: 320px) {
    margin: 0;
  }
`

export const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 25px 0;
`

export const HeaderAdaptiveMenuLogo = styled(Logo)`
  margin-bottom: 15px;
`

export const HeaderAdaptiveMenu = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    .fadeInLeft {
      -webkit-animation-name: fadeInLeft;
      animation-name: fadeInLeft;
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }
    @-webkit-keyframes fadeInLeft {
      0% {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
      }
      100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
      }
    }
    @keyframes fadeInLeft {
      0% {
        opacity: 0;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
      }
      100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
      }
    }
    width: 100%;
    max-width: 320px;  
    height: 100vh;
    background-color: #ffffff;
    color: #488f08;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
    animation: fadeInLeft 0.3s;
  }
`

export const RootHeaderSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px 0;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`

export const HeaderNavItemContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  &:hover {
    background-color: #256e2b;
    color: yellow;
  }
`

export const HeaderNavItem = styled.a`
  text-decoration: none;
  color: inherit;
`

export const HeaderAdaptiveItem = styled(HeaderNavItem)`
  margin: 10px 0 !important;
`

export const CartContainer = styled.div`
  width: 100%;
  max-width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const CartResults = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: yellow;
  position: absolute;
  top: -5px;
  left: -5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #449c7a;
  font-weight: 800;
  font-size: 10px;
`

export const AuthContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const AuthContainerItem = styled.p`
  cursor: pointer;
`