import React from 'react';
import { IPokemon } from '../types'; 

interface PokemonRowProps {
  pokemon: IPokemon;
}

const PokemonRow: React.FC<PokemonRowProps> = ({ pokemon }) => {
  return (
    <div className="pokemon-row">
      <img src={pokemon.sprite} alt={pokemon.name} />
      <p>{pokemon.id}. {pokemon.name} - Types: {pokemon.types.join(', ')}</p>
    </div>
  );
};

export default PokemonRow;
