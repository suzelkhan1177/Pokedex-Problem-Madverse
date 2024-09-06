// pokemonService.ts
import { prisma } from '../prismaClient';

async function addPokemon(name: string, types: string[], sprite: string) {
  return await prisma.pokemon.create({
    data: {
      name,
      types,
      sprite,
    },
  });
}

async function getPokemonByName(name: string) {
    return await prisma.pokemon.findUnique({
      where: { name },
    });
  }
  
async function getAllPokemon() {
    return await prisma.pokemon.findMany();
}

async function addDummyData() {
    const dummyData = [
        { name: 'Pikachu', types: ['Electric'], sprite: 'https://example.com/pikachu.png' },
        { name: 'Charizard', types: ['Fire', 'Flying'], sprite: 'https://example.com/charizard.png' },
        // Add more dummy data here
    ];

    for (const pokemon of dummyData) {
        await addPokemon(pokemon.name, pokemon.types, pokemon.sprite);
    }
}

export default {
    addPokemon,
    getPokemonByName,
    getAllPokemon,
    addDummyData,
}