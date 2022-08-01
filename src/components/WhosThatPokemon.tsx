import React from 'react';
import { useState, useEffect } from "react";
import { Typography, Box, Button } from '@mui/material';
import { generateRandomNum as rand } from "../utilities/generateRandomNum";
import { getNewPokemon } from "../utilities/getNewPokemon";
import { PokemonsFirstGeneration as names } from "../data/PokemonsFirstGeneration";
import { usePokemonContext } from "../context/PokemonContext";

let randAns1 = rand(0, 150);
let randAns2 = rand(0, 150);
let randAns3 = rand(0, 150);
let randOrder1 = rand(0, 4);
let randOrder2 = rand(0, 4);
let randOrder3 = rand(0, 4);
let randOrder4 = rand(0, 4);



export const WhosThatPokemon = () => {
  const {
    setCurrentPokemon,
    currentPokemon,
    setScore,
    score,
    lives,
    setLives,
    setGameState
  } = usePokemonContext();
  const [revealAnswer, setRevealAnswer] = useState(false);

  async function nextQuiz(answer: string) {
    let newPokemon = await getNewPokemon(rand(1, 151));
    if (answer.toLocaleLowerCase() != currentPokemon.name.toLocaleLowerCase()) {
      setLives(lives - 1);
    }
    console.log(lives);
    if (answer.toLocaleLowerCase() == currentPokemon.name.toLocaleLowerCase()) {
      setScore(score + 1);
    }
    setRevealAnswer(true);
    setTimeout(() => {
      setRevealAnswer(false);
      randAns1 = rand(0, 150);
      randAns2 = rand(0, 150);
      randAns3 = rand(0, 150);
      randOrder1 = rand(0, 4);
      randOrder2 = rand(0, 4);
      randOrder3 = rand(0, 4);
      randOrder4 = rand(0, 4);
      setCurrentPokemon(newPokemon);
    }, 1000);


  }
  useEffect(() => {
    if (lives == 0) {
      setTimeout(() => {
        setGameState("finished");
      }, 900);

    }
  }, [lives]);


  return (
    <>
      <Typography
        component="h1"
        variant="h4"
        sx={{ fontFamily: "Work Sans" }}
        mt={2}
        color="white"
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
          filter: `${revealAnswer ? "brightness(1)" : "brightness(0)"}`
        }} />

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Button
          variant="contained"
          size='large'
          sx={{ marginTop: "1rem", order: `${randOrder1}` }}
          color={(!revealAnswer) ? "secondary" : "success"}
          onClick={() => nextQuiz(currentPokemon.name)}
        >
          {currentPokemon.name}
        </Button>
        <Button
          variant="contained"
          size='large'
          sx={{ marginTop: "1rem", order: `${randOrder2}` }}
          color={(!revealAnswer) ? "secondary" : "error"}

          onClick={() => nextQuiz(names[randAns1])}
        >
          {names[randAns1]}
        </Button>
        <Button
          variant="contained"
          size='large'
          sx={{ marginTop: "1rem", order: `${randOrder3}` }}
          color={(!revealAnswer) ? "secondary" : "error"}

          onClick={() => nextQuiz(names[randAns2])}
        >
          {names[randAns2]}
        </Button>
        <Button
          variant="contained"
          size='large'
          sx={{ marginTop: "1rem", order: `${randOrder4}` }}
          color={(!revealAnswer) ? "secondary" : "error"}

          onClick={() => nextQuiz(names[randAns3])}
        >
          {names[randAns3]}
        </Button>
      </Box>

    </>


  );
};


