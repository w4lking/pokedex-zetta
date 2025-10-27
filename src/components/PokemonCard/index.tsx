import { Pokemon } from "@/types";
import styles from "./PokemonCard.module.css";
import TypeBadge from "@/components/TypeBadge";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const formatPokemonId = (id: number) => {
  return `N°${String(id).padStart(3, "0")}`;
};

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const primaryType = pokemon.types[0];

  return (
    <div className={`${styles.card} ${styles[primaryType]}`}>
      <div className={styles.cardContent}>
        <div className={styles.infoSection}>
          <span className={styles.pokemonId}>{formatPokemonId(pokemon.id)}</span>
          <h3 className={styles.pokemonName}>{pokemon.name}</h3>

          <div className={styles.typeContainer}>
            {pokemon.types.map((type) => (
              <TypeBadge key={type} typeName={type} />
            ))}
          </div>
        </div>

        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className={styles.pokemonImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
