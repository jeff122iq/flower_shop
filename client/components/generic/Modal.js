import styled from 'styled-components'

export const Modal = styled.div`
  .fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  @-webkit-keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }
  @keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }
  width: 100vw;
  height: 100vh;
  position: fixed;
  -ms-overflow-style: none;
  top: 0; 
  right: 0; 
  bottom: 0; 
  left: 0;
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,0.41780462184873945) 100%, rgba(0,0,0,0) 100%);
  z-index: 30;
  animation: fadeIn 0.3s;
  //@media screen and (max-width: 1024px) {
  //  overflow-y: scroll;
  //}
`