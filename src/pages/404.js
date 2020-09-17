import React from 'react'
import { graphql } from 'gatsby'
import { Container, Content, PostFeatureImage } from '../components'
import { H1 } from '../elements'

const notFound = ({data}) => {
  const featureImage = data.imageSharp.fixed

  return (
    <Container>
      <PostFeatureImage fixed={featureImage} />
      <Content>
      </Content>
    </Container>
    )
}

export default notFound

export const notFoundQuery = graphql`
query NotFoundQuery {
  imageSharp(fixed: {originalName: {eq: "birds.jpg"} }) {
    fixed(width: 1000, height: 400) {
      ...GatsbyImageSharpFixed
    }
  }
}
`

