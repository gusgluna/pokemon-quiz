import { useState } from "react";
import ScreenContainer from "./ScreenContainer";
import { Typography, Box, Button } from '@mui/material';
import { usePokemonContext } from "../context/PokemonContext";
import { generateRandomNum as rand } from "../utilities/generateRandomNum";
import { PokemonsFirstGeneration as names } from "../data/PokemonsFirstGeneration";
import { WhosThatPokemon } from "./WhosThatPokemon";

export const PlayingScreen = () => {
  const { currentPokemon, score, lives } = usePokemonContext();

  return (
    <ScreenContainer>
      <WhosThatPokemon />


      <Typography
        sx={{ fontFamily: "Work Sans" }}
        mt={2}
        color="white"
        align='center'
      >
        Score: {score}
      </Typography>
      <Typography
        sx={{ fontFamily: "Work Sans" }}
        color="white"
        align='center'
      >
        Lives: {lives}
      </Typography>




    </ScreenContainer>
  );
};
