import React from 'react';

interface PokemonTypeSelectionProps {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
}

const PokemonTypeSelection: React.FC<PokemonTypeSelectionProps> = ({ selectedType, selectType }) => {
  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    selectType(event.target.value);
  };

  return (
    <select className="pokemon-type-selection" value={selectedType} onChange={handleTypeChange}>
      <option value="grass">Grass</option>
      <option value="fire">Fire</option>
      <option value="water">Water</option>
      {/* Add other types as needed */}
    </select>
  );
};

export default PokemonTypeSelection;
