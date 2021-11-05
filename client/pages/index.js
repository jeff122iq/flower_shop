import React, { useEffect } from 'react'
import { HomePage } from '../styles/homePage'
import Slider from '../components/Slider'
import Container from '../components/generic/Container'
import Info from '../components/generic/Info'
import RootStore from "../store/rootStore"
import SectionTitle from '../components/generic/SectionTitle'
import { observer } from 'mobx-react'
import Layout from '../components/layout'

export default observer(function Home () {

  useEffect(() => {
    if (!RootStore.info.length) RootStore.getHomePageInfo()
  }, [])

  return (
    <HomePage>
      <Layout>
        {
          RootStore.loading ?
            <Container>
              <SectionTitle>Loading...</SectionTitle>
            </Container>
            :
            <>
              <Slider/>
              <Container>
                <Info data={RootStore.info}/>
              </Container>
            </>
        }
      </Layout>
    </HomePage>
  )
})
