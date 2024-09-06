// // pokemonRouter.ts
// import { createRouter } from '../context'; // Adjust the import according to your project setup
// import * as pokemonService from '../../app/prismaClient';

// export const pokemonRouter = createRouter()
//   .mutation('addPokemon', {
//     input: z.object({
//       name: z.string(),
//       types: z.array(z.string()),
//       sprite: z.string(),
//     }),
//     async resolve({ input }) {
//       return await pokemonService.addPokemon(input.name, input.types, input.sprite);
//     },
//   })
//   .query('getPokemonByName', {
//     input: z.string(),
//     async resolve({ input }) {
//       return await pokemonService.getPokemonByName(input);
//     },
//   })
//   .query('getAllPokemon', {
//     async resolve() {
//       return await pokemonService.getAllPokemon();
//     },
//   });
import { createRouter } from "../createRouter";
import {dummyRouter} from "./dummy";

export const pokemonRouter = createRouter().merge("dummy.", dummyRouter);

export type PokemonRouter = typeof pokemonRouter;
