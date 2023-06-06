import React from 'react'
import styled from "@emotion/styled";
import { baseStylePage } from "../../global/base/BaseStylePage";

const Container = styled.section`
  ${baseStylePage}
  display: flex;
  justify-content: center;
  align-items: center;
`;
const GameOfLife = () => {
  return (
    <Container>GameOfLife</Container>
  )
}

export default GameOfLife