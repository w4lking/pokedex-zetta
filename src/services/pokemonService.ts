import { Pokemon } from "@/types";

interface PokeApiResponse {
    name: string;
    url: string;
}

export const getPokemons = async (limit: number = 20, offset: number = 0): Promise<Pokemon[]> => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        if (!response.ok) {
            throw new Error("Failed to fetch pokemons");
        }
        const data = await response.json();

        const formattedPokemons: Pokemon[] = data.results.map((pokemon: PokeApiResponse) => {
            const id = pokemon.url.split("/")[6];

            return {
                id: Number(id),
                name: pokemon.name,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
            };
        });

        return formattedPokemons;
    } catch (error) {
        console.error("Error in getPokemons service:", error);
        return [];
    }
};