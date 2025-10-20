import styles from "./PokemonCard.module.css";

import { Pokemon } from "@/types";

interface PokemonCardProps {
    pokemon: Pokemon;
}
export default function PokemonCard({ pokemon }: PokemonCardProps) {
    return (
        <div className={styles.card}>
            <img
                src={pokemon.image}
                alt={pokemon.name}
                className={styles.pokemonImage}
            />
            <h3 className={styles.pokemonName}>{pokemon.name}</h3>
        </div>
    );
}