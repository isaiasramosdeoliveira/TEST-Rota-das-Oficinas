import { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { baseStylePage } from "../../global/base/BaseStylePage";
import Button from "../../components/Button";
import { BsArrowRight } from "react-icons/bs";
import { isRoman } from "../../ts/roman/validators/isNumber";
import { clearCamp } from "../../ts/roman/validators/clearCamp";
import { FcHighPriority } from "react-icons/fc";
import { verify } from "../../ts/roman/validators/verify";

const Container = styled.section`
  ${baseStylePage}
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 100px;
  .display {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    .card {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #6265bd;
      border-radius: 10px;
      min-width: 125px;
      height: 40px;
      color: aliceblue;
    }
  }
  input {
    width: 200px;
    padding: 8px;
    border-radius: 16px;
    border: none;
    outline: none;
  }
  #warning {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    background: #9194bc;
    padding: 18px;
    border-radius: 10px;
    #icon {
      font-size: 30px;
    }
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }
`;
const RomanNumbers = () => {
  const [value, setValue] = useState("Valor");
  const [conversion, setConversion] = useState("Conversão");
  const [state, setState] = useState(false);

  const handleVerify = (e: any, value: string) => {
    e.preventDefault();
    const res = verify(value);
    if (res > 0 && res <= 3999) {
      setConversion(String(res));
    } else {
      alert("o número para conversão tem que estar entre 0 e 3999.");
      setValue(clearCamp());
      setState(false);
    }
  };
  useEffect(() => {
    if (!isRoman(value)) {
      setValue(clearCamp());
      setState(false);
    } else {
      setState(true);
    }
  }, [value]);
  return (
    <Container>
      <span id="warning">
        <FcHighPriority id="icon" />
        Enquanto tiver caracteres inválidos o botão não será liberado.
      </span>
      <div className="display">
        <div className="card">
          <span id="value">{value}</span>
        </div>
        <BsArrowRight />
        <div className="card">
          <span id="conversion">{conversion}</span>
        </div>
      </div>
      <form action="#">
        <input
          onChange={(e) => setValue(e.target.value.toLocaleUpperCase())}
          placeholder="Digite os caracteres"
          type="text"
          id="valueCamp"
        />
        {state ? (
          <Button onClick={(e) => handleVerify(e,value)} text="Converter" />
        ) : (
          <Button
            onClick={(e) => handleVerify(e, value)}
            text="Converter"
            disabled={true}
          />
        )}
      </form>
    </Container>
  );
};

export default RomanNumbers;
