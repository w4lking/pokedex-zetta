import { Pokemon } from "@/types";

interface PokeListResponse {
  results: {
    name: string;
    url: string;
  }[];
}

interface PokeDetailResponse {
  id: number;
  name: string;
  sprites: {
    front_default: string; 
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  types: {
    type: {
      name: string;
    };
  }[];
}


export const getPokemons = async (limit: number = 20, offset: number = 0): Promise<Pokemon[]> => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    if (!response.ok) {
      throw new Error("Failed to fetch pokemon list");
    }
    const data: PokeListResponse = await response.json();

    const detailPromises = data.results.map(pokemon => {
      return fetch(pokemon.url).then(res => res.json()) as Promise<PokeDetailResponse>;
    });

    const detailedPokemons = await Promise.all(detailPromises);

    const formattedPokemons: Pokemon[] = detailedPokemons.map((detail) => {
      return {
        id: detail.id,
        name: detail.name,
        image: detail.sprites.front_default, 
        types: detail.types.map(typeInfo => typeInfo.type.name),
      };
    });

    return formattedPokemons;

  } catch (error) {
    console.error("Error in getPokemons service:", error);
    return [];
  }
};