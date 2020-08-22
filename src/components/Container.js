import React from 'react'
import { ContainerWrapper } from '../elements'
import { Nav, Footer, Title  } from '../components'

export const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      <Nav/>
      {children}
      <Footer />
    </ContainerWrapper>
    )
}
