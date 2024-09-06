import { createNextApiHandler } from "@trpc/server/adapters/next";

import { pokemonRouter } from "@/server/routers/pokemon";
import { createContext } from "@/server/context";
export type AppRouter = typeof pokemonRouter;
export default createNextApiHandler({
  router: pokemonRouter,
  createContext,
  batching: {
    enabled: true,
  },
  onError({ error }) {
    if (error.code === "INTERNAL_SERVER_ERROR") {
      console.error("Something went wrong", error);
    }
  },
});