import { Pokemon } from "@/types";
import PokemonCard from "../PokemonCard";

type PokemonListProps = {
  pokemons: Pokemon[];
};

const PokemonList = ({ pokemons }: PokemonListProps) => {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4">
      {pokemons.map((pokemon) => (
        <div key={pokemon.id} className="col">
          <PokemonCard pokemon={pokemon} />
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
