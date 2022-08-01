import axios from "axios";


type PokemonInfo = {
  name: string,
  types: string[],
  abilities: string[];
  sprite: string;
};

export async function getNewPokemon(id: number = 1): Promise<PokemonInfo> {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return {
    name: data.name,
    types: [data.types.map((t: any) => { return t.type.name; })],
    abilities: [data.abilities.map((a: any) => { return a.ability.name; })],
    sprite: data.sprites.other["official-artwork"].front_default
  };
}