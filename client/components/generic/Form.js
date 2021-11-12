import styled from 'styled-components'
import PageInput from '../../styles/input'
import SectionTitle from '../../components/generic/SectionTitle'

export const Form = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #ffffff;
  padding: 25px;
  margin: 0 10px;
  border-radius: 10px;
  color: #000000;
`

export const FormTitle = styled(SectionTitle)`
  color: #000000;
`

export const FormInput = styled(PageInput)`
  border: 1px solid #000000;
  margin: 10px 0;
  border-radius: 10px;
  color: #000000;
`

export const FormButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #488f08;
  border: none;
  outline: none;
  color: #ffffff;
  padding: 15px 0;
  border-radius: 10px;
  cursor: pointer;
`