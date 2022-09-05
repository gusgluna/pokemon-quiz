import { Button } from '@mui/material';
import { usePokemonContext } from "../context/PokemonContext";
import { getNewPokemon } from "../utilities/getNewPokemon";
import { generateRandomNum as rand } from "../utilities/generateRandomNum";

type Props = {
  answer: string;
  order: number;
};

const AnswerButton = ({ answer, order }: Props) => {

  const {
    setCurrentPokemon,
    currentPokemon,
    setScore,
    score,
    lives,
    setLives,
    revealAnswer,
    setRevealAnswer,
    gameMode,
  } = usePokemonContext();

  async function checkAnswer() {
    let newPokemon = await getNewPokemon((gameMode == "quick") ? rand(1, 151) : rand(1, 897));
    setRevealAnswer(true);

    if (answer.toLocaleLowerCase() != currentPokemon.name.toLocaleLowerCase()) {
      setLives(lives - 1);
    }
    if (answer.toLocaleLowerCase() == currentPokemon.name.toLocaleLowerCase()) {
      setScore(score + 1);
    }
    setTimeout(() => {
      setRevealAnswer(false);
    }, 900);

    setTimeout(() => {
      setCurrentPokemon(newPokemon);
    }, 1200);
  }

  let sx = {
    margin: { xs: "0.5rem", sm: "1rem" },
    order: order
  };

  return (
    <Button
      sx={sx}
      size="large"
      variant="contained"
      color={revealAnswer ? ((answer == currentPokemon.name) ? "success" : "error") : "secondary"}
      onClick={() => checkAnswer()}
      className={`${(currentPokemon.name == answer && revealAnswer) ? "animateRightAnswer" : ""} 
      ${!revealAnswer && "btnAnimation"}
      `}
    >
      {answer}
    </Button>
  );
};

export default AnswerButton;