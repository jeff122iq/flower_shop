import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1024px) {
    margin: 0 2.50rem;
  }
  @media screen and (max-width: 320px) {
    margin: 0;
  }
`

export default Container;