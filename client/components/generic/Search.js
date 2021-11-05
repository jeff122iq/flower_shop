import React from 'react'
import Input from '../../components/generic/Input'
import SearchComponent from '../../styles/search'

export default function Search({ type, placeholder }) {
  return (
    <SearchComponent>
      <Input type={type} placeholder={placeholder}/>
        <i className="fas fa-search"/>
    </SearchComponent>
  )
}