import 'next/client'; // Add this line to mark as client component
import React from 'react';
import { trpc } from './utils/trpc';
// import PokedexContainer from './components/PokedexContainer.client';
// import { trpc } from './servies'; // Assuming you have a trpc utility set up for tRPC hooks


export interface PageProps {
  params?: any;
  searchParams?: any;
}

const Page: React.FC<PageProps> = ({ params, searchParams }) => {
  // const { data: pokemons, isLoading } = trpc.useQuery(['getAllPokemon']); // Replace 'getAllPokemon' with your actual tRPC query
  const dummyQuery = trpc.useQuery(['dummy.getName', {name: 'Pikachu'}]);
  // if (isLoading) {
  //   return <div>Loading...</div>; // Or any loading component you prefer
  // }

  // if (!pokemons) {
  //   return <div>No Pokémon found.</div>;
  // }

  return (
    
    <div>
      <h1>Welcome to the Pokedex</h1>
      {/* <PokedexContainer /> */}
      {dummyQuery.data ? <div>{dummyQuery.data.greeting}</div> : <div>Loading...</div>}
    </div>
  );
};

export default Page;
