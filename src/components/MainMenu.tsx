import {
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button
} from '@mui/material';
import ScreenContainer from "./ScreenContainer";
import Pokeball from "../assets/pokeball.png";
import { usePokemonContext } from '../context/PokemonContext';

export const MainMenu = () => {
  const { setGameState } = usePokemonContext();
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
        Pokémon Quiz
      </Typography>

      <img src={Pokeball} alt="Pokeball" style={{ height: "80px", marginTop: "2rem" }} />

      <FormControl sx={{ marginTop: "3rem" }}>
        <FormLabel>
          <Typography color={"white"} align="center" sx={{ fontFamily: "Work Sans" }} variant="h5">
            Select Mode
          </Typography>
        </FormLabel>
        <RadioGroup
          defaultValue="quick"
          row
          sx={{ marginTop: "2rem" }}
        >
          <FormControlLabel value="quick" control={<Radio color="default" />} label="Quick" />
          <FormControlLabel value="advanced" control={<Radio color="default" disabled />} label="Advanced" />
        </RadioGroup>
      </FormControl>
      <Button
        variant="contained"
        size='large'
        sx={{ marginTop: "6rem" }}
        color="success"
        onClick={() => setGameState("playing")}
      >
        Start
      </Button>


    </ScreenContainer>

  );
};
