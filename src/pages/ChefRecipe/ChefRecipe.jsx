import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../../share/RecipeCard/RecipeCard';

const ChefRecipe = () => {
    const recipes = useLoaderData()
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('https://chef-recipe-hunter-server-humaionkobir341-gmailcom.vercel.app/chefs')
        .then(res => res.json())
        .then(data => dataChefs(data))
    }, [])

    const dataChefs =(data) => {
        const singleChefData = data.find(c => c.id == recipes[0].category_id);
        setData(singleChefData);
    }


    const {id, picture, name, num_recipes, years_experience, likes, bio} = data;

    return (

        <div>
            <div className="w-full md:w-3/5 mx-auto px-3  rounded overflow-hidden shadow-lg bg-white mt-12 mb-12">
            <img className="w-full h-80 mx-auto object-cover object-center" src={picture} alt="Chef" />
            <div className="px-6 py-4 text-center">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base mb-2">{bio}</p>
                <div className="flex w-1/3 mx-auto justify-between items-center">
                    <p className="text-gray-700">Likes:</p>
                    <p className="text-gray-700 font-bold">{likes}+</p>
                </div>
                <div>
                <p className="text-gray-700">Years of experience: <span className="font-bold">{years_experience}+</span></p>
                    <p className="text-gray-700">Number of recipes: <span className="font-bold">{num_recipes}+</span></p>
                </div>
            </div>
        </div>

            <div className='grid md:grid-cols-3 grid-cols-1 gap-6 justify-center items-center w-full md:w-5/6 mx-auto mb-8'>
                {
                    recipes.map(recipe => <RecipeCard
                        key={recipe.id}
                        recipe={recipe}
                    ></RecipeCard>)
                }
            </div>
        </div>
    );
};

export default ChefRecipe;