import React from 'react';
import ScreenContainer from "./ScreenContainer";
import { Button } from '@mui/material';

import { usePokemonContext } from "../context/PokemonContext";

export const EndScreen = () => {
  const { score, setGameState, setLives, setScore, setGameMode } = usePokemonContext();
  return (
    <ScreenContainer>
      Game Over!
      Score: {score}
      <Button
        variant="contained"
        size='large'
        sx={{ marginTop: "6rem" }}
        color="success"
        onClick={() => {
          setLives(3);
          setScore(0);
          setGameState("menu");
          setGameMode("quick");
        }
        }
      >
        Play Again
      </Button>


    </ScreenContainer>
  );
};
