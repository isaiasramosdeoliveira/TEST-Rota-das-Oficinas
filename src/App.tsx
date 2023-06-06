import { Outlet } from "react-router-dom";
import Content from "./patterns/Content";

function App() {
  return (
    <Content>
      <Outlet/>
    </Content>
  );
}

export default App;
