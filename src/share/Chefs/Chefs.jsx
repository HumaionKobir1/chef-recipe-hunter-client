import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Chefs = ({chef}) => {
    const {id, picture, name, num_recipes, years_experience, likes} = chef;
    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid justify-center items-center mb-4">
                <img className="h-32 w-32 rounded-full  mx-auto" src={picture} alt="Chef Picture" />
                <div className='text-center'>
                <h2 className="text-xl font-bold text-gray-900">{name}</h2>
                <p className="text-gray-700">Years of experience: <span className="font-bold">{years_experience}+</span></p>
                <p className="text-gray-700">Number of recipes: <span className="font-bold">{num_recipes}+</span></p>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-gray-700">Likes:</p>
                <p className="text-gray-700 font-bold">{likes}+</p>
            </div>
            <div className="mt-4 flex justify-between">
                <Link to={`/chefs/${id}`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    View Recipes
                    </button>
                </Link>
                <a href="#" className="text-gray-700 hover:underline">Learn More</a>
            </div>
        </div>
    );
};

export default Chefs;