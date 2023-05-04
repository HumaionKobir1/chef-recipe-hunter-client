import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RecipeCard = ({recipe}) => {
    const {name, ingredients, instructions, rating} = recipe;
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite(true);
        toast.success(`"${name}" is now your favorite recipe!`);
      };

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-4 py-2">
            <h2 className="text-xl font-bold">{name}</h2>
            <div className="mt-2">
            <h3 className="text-lg font-medium">Ingredients:</h3>
            <p>{ingredients}</p>
            </div>
            <div className="mt-2">
            <h3 className="text-lg font-medium">Cooking Method:</h3>
            <p className="mt-1">{instructions}</p>
            </div>
            <div className="mt-2">
            <h3 className="text-lg font-medium">Rating:</h3>
            <p className="mt-1">{rating.number}</p>
            </div>
        </div>
        <div className="px-4 py-2 bg-gray-100">
            <button
          className={`px-4 py-2 font-medium text-white rounded-md ${
            isFavorite ? 'bg-red-500 cursor-not-allowed' : 'bg-green-500'
          }`}
          onClick={handleFavoriteClick}
          disabled={isFavorite}
        >
          {isFavorite ? 'Added to Favorites' : 'Add to Favorites'}
        </button>
        </div>
        <ToastContainer position="top-center" autoClose={2000} />
        </div>
    );
};

export default RecipeCard;