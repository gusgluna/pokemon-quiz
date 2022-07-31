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



  return (
    <PokemonContext.Provider value={{
      gameState,
      setGameState,
      currentPokemon,
      setCurrentPokemon
    }}>
      {children}
    </PokemonContext.Provider>
  );
}