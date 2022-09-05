import React from "react";
import { usePokemonContext } from "./context/PokemonContext";
import { MainMenu } from "./components/MainMenu";
import { PlayingScreen } from "./components/PlayingScreen";
import { EndScreen } from "./components/EndScreen";
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import theme from "./theme";
import './App.css';


const ContainerStyles: {} = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "100vh"
};

function App() {
  const { gameState } = usePokemonContext();

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>

        <CssBaseline />
        <Container sx={ContainerStyles}>
          {gameState === "menu" && <MainMenu />}
          {gameState === "playing" && <PlayingScreen />}
          {gameState === "finished" && <EndScreen />}
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
