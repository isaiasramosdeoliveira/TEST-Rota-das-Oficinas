import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const PostStyled = styled.div`
  border-radius: 10px;
  border-top: 1px solid #8d90f0;
  background-color: rgba(240, 248, 255, 0.306);
  width: 300px;
  height: 400px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: relative;
  img {
    width: 200px;
    height: 200px;
  }
  h2 {
    margin: -16px;
    width: 300px;
    border-radius: 10px 10px 0px 0px;
    text-align: center;
    background: #787bef;
  }
  color: aliceblue;
  box-shadow: 5px 5px 5px rgba(117, 117, 117, 0.566);
  text-shadow: 0px 0px 2px rgb(83, 85, 86);
  .link {
    background: #787bef;
    width: 200px;
    padding: 8px;
    text-align: center;
    border-radius: 16px;
    border-bottom: 5px solid #6265bd;
    color: aliceblue;
    &:hover{
      border-bottom:none;
    }
  }
`;
interface IPost {
  route: string;
  name: string;
  img: string;
}

const Post = ({ route, name, img }: IPost) => {
  return (
    <PostStyled>
      <h2>{name}</h2>
      <img src={img} alt={name} />
      <Link className="link" to={`/${route}`}>Ver projeto</Link>
    </PostStyled>
  );
};

export default Post;
