import React from 'react'
import Layout from '../components/layout'
import Container from '../components/generic/Container'
import { Form, FormButton, FormInput, FormTitle } from '../components/generic/Form'
import { AuthPage } from '../styles/authPage'
import SectionParagraph from '../components/generic/SectionParagraph'
import Link from 'next/link'

export default function SignUp () {
  return (
    <Layout>
      <AuthPage>
        <Container>
          <Form>
            <FormTitle>Регистрация</FormTitle>
            <SectionParagraph>Уже зарегестрированны? <Link href="/sign-in">Войдите</Link></SectionParagraph>
            <FormInput type="text" placeholder="Имя пользователя"/>
            <FormInput type="email" placeholder="Имеил"/>
            <FormInput type="password" placeholder="Пароль"/>
            <FormButton>Зарегестрироваться</FormButton>
          </Form>
        </Container>
      </AuthPage>
    </Layout>
  )
};