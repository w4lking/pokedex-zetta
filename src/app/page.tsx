"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import PokemonList from "@/components/PokemonList";
import { Pokemon } from "@/types";

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  const limit = 20;
  const offset = 0;

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        const data = await response.json();

        const formattedPokemons = data.results.map((pokemon: { name: string; url: string }) => {
          const id = pokemon.url.split("/")[6];
        
          return {
            id: Number(id),
            name: pokemon.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
          };
        });

        setPokemons(formattedPokemons);

      } catch (e) {
        console.error("Erro fetching Pokemons data:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []); 
  return (
    <div className={styles.page}>
      <h1>Pokedex</h1>
      {loading ? <p>Loading...</p> : <PokemonList pokemons={pokemons} />}
    </div>
  );
}