import React, { useEffect } from "react";
import { Typography, Box } from '@mui/material';
import { usePokemonContext } from "../context/PokemonContext";
import { WhosThatPokemon } from "./WhosThatPokemon";
import Full from "../assets/full-pixel-heart.png";
import Empty from "../assets/empty-pixel-heart.png";
import { useTimer } from 'use-timer';

export const PlayingScreen = () => {

  const { score, lives, setGameState } = usePokemonContext();

  const { time, start, pause, reset, status } = useTimer({
    initialTime: 90,
    timerType: 'DECREMENTAL',
    endTime: 0,
    onTimeOver: () => {
      console.log('Time is over');
      setGameState("finished");
    },
  });


  useEffect(() => {
    start();
  }, []);

  return (
    <React.Fragment>

      <WhosThatPokemon />

      <Box sx={{ display: "flex" }}>
        <Typography
          sx={{ fontFamily: "Work Sans" }}
          // variant={"h5"}
          m={0.5}
          fontSize="1rem"

          mt={"0.5rem"}
          color="primary"
          align='center'
        >
          Score: {score}
        </Typography>
        <Typography
          sx={{ fontFamily: "Work Sans" }}
          // variant={"h5"}
          mt={"0.5rem"}
          color="primary"
          align='center'
        >
          {/* Time: {Math.floor(time / 60)} : {time % 60} */}
          Time : <span style={{ width: "50px" }}>{new Date(time * 1000).toISOString().substring(14, 19)}</span>
        </Typography>
      </Box>

      <Box sx={{ margin: "0.4rem" }}>

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
