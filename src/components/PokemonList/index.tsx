import { Pokemon } from "@/types";

import PokemonCard from "../PokemonCard";
import styles from "./PokemonList.module.css";

type PokemonListProps = {
  pokemons: Pokemon[];
};

const PokemonList = ({ pokemons }: PokemonListProps) => {
  return (
    <div className={styles.pokemonList}>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;