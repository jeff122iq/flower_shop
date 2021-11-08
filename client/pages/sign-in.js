import React from 'react'
import Layout from '../components/layout'
import { AuthPage } from '../styles/authPage'
import Container from '../components/generic/Container'
import { Form, FormButton, FormInput, FormTitle } from '../components/generic/Form'
import SectionParagraph from '../components/generic/SectionParagraph'
import Link from 'next/link'

export default function SignIn () {
  return (
    <Layout>
      <AuthPage>
        <Container>
          <Form>
            <FormTitle>Вход</FormTitle>
            <SectionParagraph>Нет аккаунта? <Link href="/sign-up">Зарегестрируйтесь!</Link></SectionParagraph>
            <FormInput type="email" placeholder="Имеил"/>
            <FormInput type="password" placeholder="Пароль"/>
            <FormButton>Войти</FormButton>
          </Form>
        </Container>
      </AuthPage>
    </Layout>
  )
};