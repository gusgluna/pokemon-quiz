import { useState, useEffect } from "react";
import { Typography, Box, Button } from '@mui/material';
import { generateRandomNum as rand } from "../utilities/generateRandomNum";
import { getNewPokemon } from "../utilities/getNewPokemon";
import { PokemonsFirstGeneration as names } from "../data/PokemonsFirstGeneration";
import { PokemonsNames as allNames } from "../data/PokemonsNames";
import { usePokemonContext } from "../context/PokemonContext";
import "../styles/WhosThatPokemon.css";
import AnswerButton from "./AnswerButton";


export const WhosThatPokemon = () => {

  const {
    setCurrentPokemon,
    currentPokemon,
    setScore,
    score,
    lives,
    setLives,
    setGameState,
    revealAnswer,
    setRevealAnswer,
    gameMode,
    answersArr,
    setAnswerArr
  } = usePokemonContext();

  useEffect(() => {
    if (lives == 0) {
      setTimeout(() => {
        setGameState("finished");
      }, 900);
    }
  }, [lives]);

  useEffect(() => {
    if (gameMode == "quick") {
      setAnswerArr([
        {
          answer: currentPokemon.name,
          order: rand(0, 10)
        },
        {
          answer: names[rand(0, 150)],
          order: rand(0, 10)
        },
        {
          answer: names[rand(0, 150)],
          order: rand(0, 10)
        },
        {
          answer: names[rand(0, 150)],
          order: rand(0, 10)
        }]);
    }
    if (gameMode == "advanced") {
      setAnswerArr([
        {
          answer: currentPokemon.name,
          order: rand(0, 10)
        },
        {
          answer: allNames[rand(0, 896)],
          order: rand(0, 10)
        },
        {
          answer: allNames[rand(0, 896)],
          order: rand(0, 10)
        },
        {
          answer: allNames[rand(0, 896)],
          order: rand(0, 10)
        }]);
    }
  }, [currentPokemon]);

  return (
    <>
      <Typography
        component="h1"
        variant="h4"
        sx={{ fontFamily: "Work Sans" }}
        mt={2}
        color={"primary"}
        fontWeight={"bolder"}
        align='center'
      >
        Who's That Pokémon?
      </Typography>

      <img
        src={currentPokemon.sprite}
        alt={currentPokemon.name}
        style={{
          height: "160px",
          filter: `${revealAnswer ? "brightness(1)" : "brightness(0)"}`,
        }}

        className={`${!revealAnswer && "imgAnimation"}`}
      />

      <Box sx={{
        display: "grid",
        gridTemplateColumns: { sm: "1fr 1fr" },
        padding: "1rem"
      }}>
        {answersArr.map((ans) => {
          return (
            <AnswerButton answer={ans.answer} key={`${ans.answer}${ans.order}`} order={ans.order} />
          );
        })}
      </Box>

    </>


  );
};


