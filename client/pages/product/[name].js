import React from 'react'
import Layout from '../../components/layout'
import Container from '../../components/generic/Container'
import { useRouter } from 'next/router'
import { ProductPage } from '../../styles/productPage';

export default function Products () {
  const query = useRouter()

  return (
    <Layout>
      <ProductPage>
      <Container>
        <h1 style={{color: "#000000"}}>{query.query.name}</h1>
      </Container>
      </ProductPage>
    </Layout>
  )
};