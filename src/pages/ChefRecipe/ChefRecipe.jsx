import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefRecipe = () => {
    const recipes = useLoaderData()
    

    return (
        <div>
            <h1>kljhlkjhkjhlh : {recipes.length}</h1>
        </div>
    );
};

export default ChefRecipe;