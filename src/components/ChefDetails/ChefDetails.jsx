import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaCalendarAlt, FaHamburger, FaRegThumbsUp } from 'react-icons/fa';
import ChefRecipes from '../ChefRecipes/ChefRecipes';
const ChefDetails = () => {
    const chef = useLoaderData()
    const { id, picture, bio, name, years_experience, num_recipes, likes, recipes } = chef
    console.log(recipes)

    return (
        <div>

            <div className="hero min-h-screen bg-purple-100">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={picture}
                        className="max-w-lg rounded-lg" />
                    <div>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{name}</h2>
                            <p>{bio}</p>
                            <p className='flex'><FaCalendarAlt className='mr-2 mt-1'></FaCalendarAlt>   {years_experience} Years of experiences working as a chef.</p>

                            <div className='flex items-center justify-center gap-12 py-2'>
                                <span className='flex items-center'><FaRegThumbsUp className='mr-2'></FaRegThumbsUp>   {likes}</span>
                                <span className='flex items-center'><strong><FaHamburger className='mr-2'></FaHamburger> </strong>   {num_recipes} of recipes.</span>
                            </div>
                            <div className="card-actions">
                                <Link to='/'>
                                    <button className="btn btn-primary bg-purple-700">Go to Home</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-center'>
                <h3 className="text-3xl font-bold mb-2 pt-8">
                {name}'s most popular recipes!
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3  w-4/5 mx-auto">
                    {
                        chef.map(recipe => (
                            <div class="ml-6" key={recipe.id}>
                                <ChefRecipes chef={recipe} />
                            </div>
                        ))
                    }
                </div>
            </div>


            {/* chef recipes :::{recipes.map(recipe=><p>{recipe.recipe_name}</p>)} */}
        </div>
    );
};

export default ChefDetails;