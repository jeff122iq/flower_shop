import React, { useState } from 'react'
import { Form, FormButton, FormInput, FormTitle } from '../components/generic/Form'
import SectionParagraph from '../components/generic/SectionParagraph'
import { AuthContainerItem } from '../styles/header'

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
        <SectionParagraph>Нет аккаунта? <AuthContainerItem onClick={showRegister}>Зарегестрируйтесь!</AuthContainerItem></SectionParagraph>
        <FormInput type="email" placeholder="Имеил"/>
        <FormInput type="password" placeholder="Пароль"/>
        <FormButton>Войти</FormButton>
      </Form> :
        <Form>
          <FormTitle>Регистрация</FormTitle>
          <SectionParagraph>Есть аккаунт? <AuthContainerItem onClick={showLogin}>Войдите!</AuthContainerItem></SectionParagraph>
          <FormInput type="text" placeholder="Имя пользователя"/>
          <FormInput type="email" placeholder="Имеил"/>
          <FormInput type="password" placeholder="Пароль"/>
          <FormButton>Зарегистрируйтесь</FormButton>
        </Form>
    }
    </>
  )
};