import { useState, useEffect } from "react";
import { Typography, Box, Button } from '@mui/material';
import { generateRandomNum as rand } from "../utilities/generateRandomNum";
import { getNewPokemon } from "../utilities/getNewPokemon";
import { PokemonsFirstGeneration as names } from "../data/PokemonsFirstGeneration";
import { PokemonsNames as allNames } from "../data/PokemonsNames";
import { usePokemonContext } from "../context/PokemonContext";
import "../styles/WhosThatPokemon.css";

let randOrder1 = rand(0, 4);
let randOrder2 = rand(0, 4);
let randOrder3 = rand(0, 4);
let randOrder4 = rand(0, 4);
let animateRightAnswer: boolean = false;
let animateAnswer1: boolean = false;
let animateAnswer2: boolean = false;
let animateAnswer3: boolean = false;

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
  } = usePokemonContext();

  const [ans1, setAns1] = useState("bulbasaur");
  const [ans2, setAns2] = useState("bulbasaur");
  const [ans3, setAns3] = useState("bulbasaur");

  async function nextQuiz(answer: string) {
    let newPokemon = await getNewPokemon((gameMode == "quick") ? rand(1, 151) : rand(1, 897));
    if (answer.toLocaleLowerCase() != currentPokemon.name.toLocaleLowerCase()) {
      setLives(lives - 1);
    }
    if (answer.toLocaleLowerCase() == currentPokemon.name.toLocaleLowerCase()) {
      setScore(score + 1);
    }
    setRevealAnswer(true);
    setTimeout(() => {
      animateRightAnswer = false;
      animateAnswer1 = false;
      animateAnswer2 = false;
      animateAnswer3 = false;
      setRevealAnswer(false);
    }, 900);

    setTimeout(() => {
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

  useEffect(() => {
    setAns1((gameMode == "quick") ? names[rand(0, 150)] : allNames[rand(0, 896)]);
    setAns2((gameMode == "quick") ? names[rand(0, 150)] : allNames[rand(0, 896)]);
    setAns3((gameMode == "quick") ? names[rand(0, 150)] : allNames[rand(0, 896)]);
  }, []);

  useEffect(() => {
    if (revealAnswer == false) {
      setAns1((gameMode == "quick") ? names[rand(0, 150)] : allNames[rand(0, 896)]);
      setAns2((gameMode == "quick") ? names[rand(0, 150)] : allNames[rand(0, 896)]);
      setAns3((gameMode == "quick") ? names[rand(0, 150)] : allNames[rand(0, 896)]);
    }
  }, [revealAnswer]);


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
        }}

        className={`${revealAnswer ? "swipeOut" : "swipeIn"}`}
      />

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Button
          variant="contained"
          size='large'
          sx={{ marginTop: "1rem", order: `${randOrder1}` }}
          color={(!revealAnswer) ? "secondary" : "success"}
          onClick={() => { nextQuiz(currentPokemon.name); animateRightAnswer = true; }}
          className={`${animateRightAnswer ? "animateRightAnswer" : ""} ${!revealAnswer && "swipeIn"}`}
        >
          {currentPokemon.name}
        </Button>
        <Button
          variant="contained"
          size='large'
          sx={{ marginTop: "1rem", order: `${randOrder2}` }}
          color={(!revealAnswer) ? "secondary" : "error"}
          onClick={() => { nextQuiz(ans1); animateAnswer1 = true; }}
          className={
            `${animateAnswer1 ? "animateWrongAnswer" : ""} ${!revealAnswer && "swipeIn"}`}
        >
          {ans1}
        </Button>
        <Button
          variant="contained"
          size='large'
          sx={{ marginTop: "1rem", order: `${randOrder3}` }}
          color={(!revealAnswer) ? "secondary" : "error"}
          onClick={() => { nextQuiz(ans2); animateAnswer2 = true; }}
          className={`${animateAnswer2 ? "animateWrongAnswer" : ""} ${!revealAnswer && "swipeIn"}`}
        >
          {ans2}
        </Button>
        <Button
          variant="contained"
          size='large'
          sx={{ marginTop: "1rem", order: `${randOrder4}` }}
          color={(!revealAnswer) ? "secondary" : "error"}
          onClick={() => { nextQuiz(ans3); animateAnswer3 = true; }}
          className={`${animateAnswer3 ? "animateWrongAnswer" : ""} ${!revealAnswer && "swipeIn"}`}
        >
          {ans3}
        </Button>
      </Box>

    </>


  );
};


