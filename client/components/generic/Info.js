import React, { useEffect } from 'react'
import { InfoContainer, InfoDataItem } from "../../styles/info"
import SectionTitle from '../../components/generic/SectionTitle'
import SectionParagraph from '../../components/generic/SectionParagraph'

export default function Info({ data }) {

  return (
    <InfoContainer>
      { data.map((item, idx) => {
        return (
          <InfoDataItem key={idx}>
            <SectionTitle>{item.title}</SectionTitle>
            <SectionParagraph  dangerouslySetInnerHTML={{__html: item.description}}/>
          </InfoDataItem>
        )
      }) }
    </InfoContainer>
  )
}