import React from 'react'
import Layout from '../../components/layout'
import Container from '../../components/generic/Container'
import { useRouter } from 'next/router'

export default function Products () {

  const query = useRouter()
  console.log(query.query)

  return (
    <Layout>
      <Container>
        <h1 style={{color: "#000000"}}>{query.query.name}</h1>
      </Container>
    </Layout>
  )
};