import { SWRConfig } from "swr";
import PokeContainer from "./Pokemon/PokeContainer";
import fetcher from "./Pokemon/fetcher";
import { StyledPokedex, StyledTitle } from "./Pokemon/Pokemon.styled";

function App() {
  return (
    <>
      <StyledTitle>Pokedex</StyledTitle>
      <SWRConfig value={{ fetcher, suspense: true }}>
        <StyledPokedex>
          <PokeContainer />
        </StyledPokedex>
      </SWRConfig>
    </>
  );
}

export default App;
