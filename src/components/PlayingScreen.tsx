import React from "react";
import { Typography, Box } from '@mui/material';
import { usePokemonContext } from "../context/PokemonContext";
import { WhosThatPokemon } from "./WhosThatPokemon";
import Full from "../assets/full-pixel-heart.png";
import Empty from "../assets/empty-pixel-heart.png";

export const PlayingScreen = () => {
  const { score, lives } = usePokemonContext();

  return (
    <React.Fragment>

      <WhosThatPokemon />

      <Typography
        sx={{ fontFamily: "Work Sans" }}
        variant={"h5"}
        mt={2}
        color="primary"
        align='center'
      >
        Score: {score}
      </Typography>

      <Box sx={{ margin: "1rem" }}>

        {(lives == 3) && <>
          <img className="sprite" src={Full} />
          <img className="sprite" src={Full} />
          <img className="sprite" src={Full} />
        </>
        }
        {(lives == 2) && <>
          <img className="sprite" src={Full} />
          <img className="sprite" src={Full} />
          <img className="sprite" src={Empty} />
        </>
        }
        {(lives == 1) && <>
          <img className="sprite" src={Full} />
          <img className="sprite" src={Empty} />
          <img className="sprite" src={Empty} />
        </>
        }
        {(lives == 0) && <>
          <img className="sprite" src={Empty} />
          <img className="sprite" src={Empty} />
          <img className="sprite" src={Empty} />
        </>
        }
      </Box>
    </React.Fragment>
  );
};
