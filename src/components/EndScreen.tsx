import React from 'react';
import { Button, Typography } from '@mui/material';

import { usePokemonContext } from "../context/PokemonContext";

export const EndScreen = () => {
  const { score, setGameState, setLives, setScore, setGameMode } = usePokemonContext();
  return (
    <React.Fragment>
      <Typography variant='h3'>
        Game Over!
      </Typography>
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


    </React.Fragment>
  );
};
