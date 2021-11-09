import React, { useState } from 'react'
import { Form, FormButton, FormInput, FormTitle } from '../components/generic/Form'
import SectionParagraph from '../components/generic/SectionParagraph'

export default function Auth() {

  const [login, setLogin] = useState(true)

  const showLogin = () => {
    setLogin(true)
  }

  const showRegister = () => {
    setLogin(!login)
  }

  return (
    <>
    {
      login ?
        <Form>
        <FormTitle>Вход</FormTitle>
        <SectionParagraph>Нет аккаунта? <p onClick={showRegister}>Зарегестрируйтесь!</p></SectionParagraph>
        <FormInput type="email" placeholder="Имеил"/>
        <FormInput type="password" placeholder="Пароль"/>
        <FormButton>Войти</FormButton>
      </Form> :
        <Form>
          <FormTitle>Регистрация</FormTitle>
          <span>Есть аккаунт? <SectionParagraph onClick={showLogin}>Войдите!</SectionParagraph></span>
          <FormInput type="text" placeholder="Имя пользователя"/>
          <FormInput type="email" placeholder="Имеил"/>
          <FormInput type="password" placeholder="Пароль"/>
          <FormButton>Зарегистрируйтесь</FormButton>
        </Form>
    }
    </>
  )
};