import { Pokemon } from "@/types";

type PokemonListProps = {
  pokemons: Pokemon[];
};

const PokemonList = ({ pokemons }: PokemonListProps) => {
  return (
    <div>
      {pokemons.map((pokemon) => (
        <div key={pokemon.id}>
          <p>{pokemon.name}</p>
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
      ))}
    </div>
  );
};

export default PokemonList;