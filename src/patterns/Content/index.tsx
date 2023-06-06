import React from 'react'
import styled from "@emotion/styled";

const Container = styled.main`

`

interface IContent {
  children: React.ReactNode;
}

const Content = ({children}: IContent) => {
  return (
    <Container>
        {children}
    </Container>
  )
}

export default Content