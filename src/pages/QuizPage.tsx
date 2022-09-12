import { MainMenu } from "../components/MainMenu";
import { PlayingScreen } from "../components/PlayingScreen";
import { EndScreen } from "../components/EndScreen";
import { usePokemonContext } from "../context/PokemonContext";


const QuizPage = () => {
  const { gameState } = usePokemonContext();

  return (
    <>
      {gameState === "menu" && <MainMenu />}
      {gameState === "playing" && <PlayingScreen />}
      {gameState === "finished" && <EndScreen />}
    </>
  );
};

export default QuizPage;