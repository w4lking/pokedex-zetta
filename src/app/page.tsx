"use client";

import { useEffect, useState } from "react";

import PokemonList from "@/components/PokemonList";
import { Pokemon } from "@/types";
import { getPokemons } from "@/services/pokemonService";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

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
        <div className={styles.page}>
            <NavBar />
            {loading ? <p>Loading...</p> : <PokemonList pokemons={pokemons} />}
            <Footer />
        </div>
    );
}