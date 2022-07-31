import axios from 'axios';
import { useEffect } from 'react';
import { usePokemonContext } from "./context/PokemonContext";
import { MainMenu } from "./components/MainMenu";
import { PlayingScreen } from "./components/PlayingScreen";
import { EndScreen } from "./components/EndScreen";
import './App.css';
import { Container, CssBaseline, Box, Button } from '@mui/material';

const fetchData = async () => {
  const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
  console.log(data.results);
};


function App() {
  const { gameState, setGameState } = usePokemonContext();

  return (
    <>
      <Container>
        <CssBaseline />
        <Box sx={{
          height: "100vh",
          display: "grid",
          placeContent: "center"
        }}>
          {gameState === "menu" && <MainMenu />}
          {gameState === "playing" && <PlayingScreen />}
          {gameState === "finished" && <EndScreen />}
        </Box>
      </Container>
    </>
  );
}

export default App;
