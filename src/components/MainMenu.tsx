import {
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button
} from '@mui/material';
import React from "react";
import Pokeball from "../assets/pokeball.png";
import { usePokemonContext } from '../context/PokemonContext';



export const MainMenu = () => {
  const { setGameState, setGameMode, gameMode } = usePokemonContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGameMode((event.target as HTMLInputElement).value);
  };

  return (
    <React.Fragment>
      <Typography
        component="h1"
        variant="h4"
        sx={{ fontFamily: "Work Sans" }}
        mt={2}
        color="primary"
        fontWeight={"bolder"}
        align='center'
      >
        Pokémon Quiz
      </Typography>

      <img src={Pokeball} alt="Pokeball" style={{ height: "80px", marginTop: "2rem", margin: "0 auto" }} />

      <FormControl sx={{ marginTop: "3rem" }}>
        <FormLabel>
          <Typography
            color={"primary"}
            align="center"
            sx={{ fontFamily: "Work Sans" }}
            variant="h5">
            Select Mode
          </Typography>
        </FormLabel>
        <RadioGroup
          defaultValue="quick"
          row
          sx={{ marginTop: "2rem" }}
          onChange={handleChange}
          value={gameMode}
        >
          <FormControlLabel value="quick" control={<Radio color="primary" />} label="Quick" />
          <FormControlLabel value="advanced" control={<Radio color="primary" />} label="Advanced" />
        </RadioGroup>
      </FormControl>
      <Button
        variant="contained"
        size='large'
        sx={{ marginTop: "6rem" }}
        color="secondary"
        onClick={() => setGameState("playing")}
      >
        Start
      </Button>


    </React.Fragment>
  );
};
