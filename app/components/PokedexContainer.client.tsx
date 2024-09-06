// PokedexContainer.tsx

import React from 'react';
import 'next/client'; // Add this line to mark as client component
import FilterablePokedexTable from './FilterablePokedexTable.client';


const PokedexContainer: React.FC = () => {
    // You can add additional logic or state here if needed

    return (
        <div>
            {/* Any additional markup or components can go here */}
            <FilterablePokedexTable />
        </div>
    );
}

export default PokedexContainer;
