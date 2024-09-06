import { createReactQueryHooks } from "@trpc/react";
import { inferProcedureOutput } from "@trpc/server";

import { PokemonRouter } from "@/server/routers/pokemon";

export const trpc = createReactQueryHooks<PokemonRouter>();

export type inferQueryOutput<
  TRouteKey extends keyof PokemonRouter["_def"]["queries"]
> = inferProcedureOutput<PokemonRouter["_def"]["queries"][TRouteKey]>;