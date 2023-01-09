import { GlobalStyled } from "./styles/globalStyle";
import { RoutesMain as Routes } from "./routes";
import { StyledToastify } from "./styles/toastify";

function App() {
  return (
    <div className="App">
      <GlobalStyled />
      <StyledToastify/>
      <Routes />
    </div>
  );
}

export default App;
