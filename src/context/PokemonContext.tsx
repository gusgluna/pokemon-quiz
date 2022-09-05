import React from "react";
import { createContext, useContext, useState, ReactNode } from "react";

/*Define Types*/

type ProviderProps = {
  children: ReactNode;
};

type PokemonInfo = {
  name: string,
  types: string[],
  abilities: string[];
  sprite: string;
};

type PokemonContext = {
  gameState: string;
  setGameState: (value: string) => void;
  currentPokemon: PokemonInfo;
  setCurrentPokemon: (value: PokemonInfo) => void;
  score: number;
  setScore: (value: number) => void;
  lives: number;
  setLives: (value: number) => void;
  revealAnswer: boolean;
  setRevealAnswer: (value: boolean) => void;
  gameMode: string;
  setGameMode: (value: string) => void;
  answersArr: { answer: string, order: number; }[];
  setAnswerArr: (value: { answer: string, order: number; }[]) => void;
};

/*Create Context*/
const PokemonContext = createContext({} as PokemonContext);

/*Create a hook to consume the context */
export function usePokemonContext() {
  return useContext(PokemonContext);
}

export function PokemonContextProvider({ children }: ProviderProps) {
  const [gameState, setGameState] = useState("menu");
  const [currentPokemon, setCurrentPokemon] = useState<PokemonInfo>({
    name: "bulbasaur",
    types: ["grass", "poison"],
    abilities: ["overgrow", "chlorophyll"],
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
  });
  const [score, setScore] = useState<number>(0);
  const [lives, setLives] = useState<number>(3);
  const [revealAnswer, setRevealAnswer] = useState(false);
  const [gameMode, setGameMode] = useState("quick");
  const [answersArr, setAnswerArr] = useState<{ answer: string, order: number; }[]>([{ answer: "??", order: 1 }]);



  return (
    <PokemonContext.Provider value={{
      gameState,
      setGameState,
      currentPokemon,
      setCurrentPokemon,
      score,
      setScore,
      lives,
      setLives,
      revealAnswer,
      setRevealAnswer,
      gameMode,
      setGameMode,
      answersArr,
      setAnswerArr
    }}>
      {children}
    </PokemonContext.Provider>
  );
}