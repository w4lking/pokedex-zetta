"use client";

import { useEffect, useState } from "react";
import PokemonList from "@/components/PokemonList";
import { Pokemon } from "@/types";
import { getPokemons } from "@/services/pokemonService";

import styles from "./page.module.css"; 

export default function Home() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPokemons = async () => {
            const pokemonData = await getPokemons(20, 0); 
            setPokemons(pokemonData);
            setLoading(false);
        };

        loadPokemons();
    }, []);
    return (
        <>
            {loading ? <p>Loading...</p> : <PokemonList pokemons={pokemons} />}
        </>
    );
}