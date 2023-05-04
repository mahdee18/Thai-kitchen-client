import React, { useState } from 'react';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';

const ChefRecipes = ({ recipe }) => {
    const { recipe_name, ingredients, method, recipe_rating, recipe_image } = recipe;
    const [favorite, setFavorite] = useState(false)

    const handleFav = () => {
        setFavorite(true)
    }
    return (
        <div className="max-w-3xl mx-auto">
            <div className="hero min-h-screen bg-base-200 mb-8">
                <div className="hero-content flex-col lg:flex-row-reverse items-center lg:items-start">
                    <img src={recipe_image} className="w-full lg:max-w-sm rounded-lg mb-6 lg:mb-0 lg:mr-6" />
                    <div className="flex-grow">
                        <h1 className="text-xl font-bold">{recipe_name}</h1>
                        <p className="py-6 text-lg"><strong>Ingredients:</strong>  {ingredients}.</p>
                        <p className="py-6 text-lg"><strong>Method:</strong>  {method}.</p>

                        <div className="flex items-center justify-between">
                            <p><strong>Ratings:</strong>  {recipe_rating}</p>
                           { !favorite ?
                            <button onClick={handleFav}>
                                <HiOutlineHeart></HiOutlineHeart>
                            </button> :
                                <HiHeart></HiHeart>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecipes;
