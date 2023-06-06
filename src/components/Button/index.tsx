import styled from "@emotion/styled";

const ButtonStyled = styled.button`
  background: #787bef;
  width: 200px;
  padding: 8px;
  text-align: center;
  border-radius: 16px;
  border: none;
  border-bottom: 5px solid #6265bd;
  color: aliceblue;
  cursor: pointer;
  &:hover {
    border-bottom: none;
  }
  &:disabled {
    background: rgb(215, 46, 46);
    border-bottom: 5px solid rgb(162, 36, 36);
  }
`;

interface IButton{
  text: string
  onClick?(e?: any): void,
  disabled?: boolean
}

const Button = ({text, onClick, disabled}: IButton) => {
  return (
    <ButtonStyled disabled={disabled} onClick={onClick}>{text}</ButtonStyled>
  )
}

export default Button