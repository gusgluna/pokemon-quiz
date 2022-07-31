import { useState } from "react";
import ScreenContainer from "./ScreenContainer";
import { Typography, Box, Button } from '@mui/material';
import { usePokemonContext } from "../context/PokemonContext";
import { generateRandomNum as rand } from "../utilities/generateRandomNum";
import { PokemonsFirstGeneration as names } from "../data/PokemonsFirstGeneration";

export const PlayingScreen = () => {
  const { currentPokemon } = usePokemonContext();
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <ScreenContainer>
      <Typography
        component="h1"
        variant="h4"
        sx={{ fontFamily: "Work Sans" }}
        mt={2}
        color="#FFCC00"
        fontWeight={"bolder"}
        align='center'
      >
        Who's That Pokémon?
      </Typography>

      <img
        src={currentPokemon.sprite}
        alt={currentPokemon.name}
        style={{
          height: "180px",
          filter: `${isRevealed ? "brightness(1)" : "brightness(0)"}`
        }} />

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Button
          variant="contained"
          size='large'
          sx={{ marginTop: "1rem", order: `${rand(1, 4)}` }}
          color="success">
          {currentPokemon.name}
        </Button>
        <Button
          variant="contained"
          size='large'
          sx={{ marginTop: "1rem", order: `${rand(1, 4)}` }}
          color="success">
          {names[rand(0, 150)]}
        </Button>
        <Button
          variant="contained"
          size='large'
          sx={{ marginTop: "1rem", order: `${rand(1, 4)}` }}
          color="success">
          {names[rand(0, 150)]}
        </Button>
        <Button
          variant="contained"
          size='large'
          sx={{ marginTop: "1rem", order: `${rand(1, 4)}` }}
          color="success">
          {names[rand(0, 150)]}
        </Button>

      </Box>




    </ScreenContainer>
  );
};
