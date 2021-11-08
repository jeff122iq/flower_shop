import styled from 'styled-components'
import PageInput from '../../styles/input'
import SectionTitle from '../../components/generic/SectionTitle'

export const Form = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  min-height: 50vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const FormTitle = styled(SectionTitle)`
  color: white;
`

export const FormInput = styled(PageInput)`
  border: 1px solid #ffffff;
  margin: 10px 0;
  border-radius: 10px;
`

export const FormButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #449c7b;
  border: none;
  outline: none;
  color: #ffffff;
  padding: 15px 0;
  border-radius: 10px;
  cursor: pointer;
`