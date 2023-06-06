import styled from "@emotion/styled";
import Post from "../../components/Post";

import cubo from "../../assets/img/rubik.png"
import pagar from "../../assets/img/pagar.png";
import roman from "../../assets/img/numeros-romanos.png"
import { baseStylePage } from "../../global/base/BaseStylePage";

const Container = styled.section`
  ${baseStylePage}
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;
const Main = () => {
  return (
    <Container>
      <Post img={roman} name="números romanos" route="numerosromanos" />
      <Post img={cubo} name="Jogo da vida" route="jogodavida" />
      <Post img={pagar} name="Conta do restaurante" route="contaderestaurante" />
    </Container>
  );
};

export default Main;
