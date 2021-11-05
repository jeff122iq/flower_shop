import styled from 'styled-components'

const PageInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background: transparent;
  color: #ffffff;
  padding: 10px 15px;
  &::placeholder {
    color: inherit;
  }
  &[type="search"]::-webkit-search-cancel-button {
    display: none;
  }
`

export default PageInput;