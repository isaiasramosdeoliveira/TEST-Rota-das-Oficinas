import styled from "@emotion/styled";
import { baseStylePage } from "../../global/base/BaseStylePage";
import Button from "../../components/Button";
import { useState } from "react";
import Product from "../../ts/restaurant/models/Product";
import Client from "../../ts/restaurant/models/Client";
import { FcHighPriority } from "react-icons/fc";
import verify from "../../ts/restaurant/validators/verify";

const Container = styled.section`
  ${baseStylePage}
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 100px;
  position: relative;
  #warning {
    position: absolute;
    top: 35px;
    right: 20%;
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
  .flow {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
  }
  input,
  select {
    width: 235px;
    padding: 8px;
    border-radius: 16px;
    border: none;
    outline: none;
  }
  button {
    width: 235px;
  }
  .dashboard,
  .controllers {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .dashboard {
    .box {
      display: flex;
      flex-direction: column;
      min-width: 250px;
      min-height: 150px;
      padding: 12px;
      background: #6265bd;
      color: aliceblue;
      font-size: 14px;
      ul {
        list-style: none;
      }
    }
    .box:nth-child(1) {
      border-radius: 10px 0px 0px 10px;
      border-right: 1px solid #787bef;
    }
    .box:nth-child(2) {
      border-radius: 0px 10px 10px 0px;
      ul {
        li {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
  .controllers {
    align-items: flex-end;
    gap: 40px;
    .form {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      height: 180px;
    }
    form {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;
    }
  }

  .account {
    display: flex;
    background: #787bef;
    border-radius: 10px;
    color: aliceblue;
    .record,
    .finish {
      min-height: 365px;
      max-height: 365px;
      min-width: 300px;
      padding: 0px 16px;
      margin:16px 0px;
      .title{
        text-align:center;
        width:100%;
      }
    }
    .record {
      overflow-y: auto;
      .display {
        min-height: 365px;
        max-height: 365px;
      }
    }
    .finish {
      border-left: 1px solid;
      .display {
        overflow-y: auto;
        min-height: 280px;
        max-height: 280px;
      }
    }
    .list {
      margin-bottom: 10px;
      background: #6265bd;
      padding: 10px;
      border-radius: 8px;
      overflow-y: auto;
      max-height: 200px;
      ul {
        li {
          display: flex;
          justify-content: space-between;
        }
      }
    }

    .total {
      border-top: 1px solid;
      padding-top: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      button {
        width: 125px;
        background-color: rgb(20, 198, 115);
        border-bottom: 5px solid rgb(16, 161, 93);
        color: black;
        &:hover {
          border-bottom: none;
        }
      }
    }
  }
`;
const Restaurant = () => {
  const [client, setClient] = useState("");
  const [camp, setCamp] = useState("");
  const [product, setProduct] = useState("");
  const [valueProduct, setValueProduct] = useState("");
  const [content, setContent] = useState(undefined);
  const handleRegisterClient = (e: Event) => {
    e.preventDefault();
    const product = Product.products.find((product) => product.name == camp);
    if (product && camp !== "") {
      const value = Client.calculateValue(product.value, client);
      const dice = {
        name: client,
        pay: [
          {
            name: client,
            product: {
              name: camp,
              value
            },
          },
        ],
      };
      Client.register(dice);
      verify();
      setClient("");
      setCamp("");
    } else {
      return alert("Preencha todos os campos.");
    }
  };
  const handleRegisterProduct = (e: Event) => {
    e.preventDefault();
    const dice = {
      name: product,
      value: Number(valueProduct),
    };
    Product.register(dice);
    setValueProduct("");
    setProduct("");
  };
  return (
    <Container>
      <span id="warning">
        <FcHighPriority id="icon" />
        Insira os produtos, em seguida selecione as pessoas que irão pagar tais
        produtos.
      </span>
      <div className="flow">
        <div className="dashboard">
          <div className="box clients">
            <h3>Clientes</h3>
            {Client.clients.length == 0 ? (
              <span>Nenhum cliente registrado</span>
            ) : (
              <ul>
                {Client.clients.map((client) => (
                  <li key={client.name}>{client.name}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="box amount">
            <h3>Produtos:</h3>
            {Product.products.length == 0 ? (
              <span>Nenhum produto registrado</span>
            ) : (
              <ul id="individual_customer">
                {Product.products.map((product) => (
                  <li key={product.name}>
                    <span>{product.name}</span>
                    <span>R${product.value}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="controllers">
          <div className="form form_clients">
            <h3>Clientes e consumo</h3>
            <form action="#">
              <select
                value={camp}
                name="products"
                id="products"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setCamp(e.target.value)
                }
              >
                <option value="">Produto a ser pago</option>
                {Product.products.length == 0 ? (
                  <></>
                ) : (
                  <>
                    {Product.products.map((product) => (
                      <option key={product.name} value={product.name}>
                        {product.name}
                      </option>
                    ))}
                  </>
                )}
              </select>
              <input
                value={client}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setClient(e.target.value)
                }
                required
                type="text"
                placeholder="Nome do cliente que irá pagar"
              />
              <Button
                onClick={(e: Event) => handleRegisterClient(e)}
                text="Cadastrar"
              />
            </form>
          </div>
          <div className="form form_products">
            <h3>Produto consumido</h3>
            <form action="#">
              <input
                value={product}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setProduct(e.target.value)
                }
                required
                type="text"
                placeholder="Nome do produto"
              />
              <input
                value={valueProduct}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setValueProduct(e.target.value)
                }
                required
                type="text"
                placeholder="valor do produto"
              />
              <Button
                onClick={(e: Event) => handleRegisterProduct(e)}
                text="inserir"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="account">
        <div className="record">
          <h3 className="title">registro</h3>
          {Client.clients[1]?.pay.length == 0 ? (
            <span>Nenhum registro</span>
          ) : (
            <div className="display">
              {Client.clients.map((client) => (
                <div className="list" key={client.name}>
                  <h4>{client.name}</h4>
                  <div key={client.name} className="clients">
                    {client.pay.map((client) => (
                      <div key={client.name}>
                        <ul>
                          <li>
                            <span>{client.product.name}</span>
                            <span>
                              R$
                              {client.product.value}
                            </span>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="finish">
          <h3 className="title">Pagamento</h3>
          <div className="display">

          </div>
          <span className="total">
            <Button text="Finalizar" />
            R$50.00
          </span>
        </div>
      </div>
    </Container>
  );
};

export default Restaurant;
