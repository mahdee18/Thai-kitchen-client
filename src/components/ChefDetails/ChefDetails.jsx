import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaCalendarAlt, FaHamburger, FaRegThumbsUp } from 'react-icons/fa';
import ChefRecipes from '../ChefRecipes/ChefRecipes';

const ChefDetails = () => {
    const chef = useLoaderData();
    const { id, picture, bio, name, years_experience, num_recipes, likes, recipes } = chef;

    return (
        <div>
            <div className="min-h-screen bg-purple-100">
                <div className="px-4 py-8 lg:px-16 lg:py-12">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                        <div className="flex items-center justify-center">
                            <img src={picture} className="w-4/5 max-w-sm rounded-lg shadow-lg" alt={name} />
                        </div>
                        <div className="flex flex-col justify-between">
                            <div className="text-center mx-auto ">
                                <h2 className="text-4xl font-bold">{name}</h2>
                                <p className="text-lg py-4">{bio}</p>
                                <div className='flex items-center justify-center gap-12 py-2'>
                                    <span className='flex items-center'><FaRegThumbsUp className='mr-2'></FaRegThumbsUp>   {likes}</span>
                                    <span className='flex items-center'><strong><FaHamburger className='mr-2'></FaHamburger> </strong>   {num_recipes} of recipes.</span>

                                </div>
                                <span className='flex items-center justify-center gap-2'><FaCalendarAlt className=''></FaCalendarAlt>  {years_experience} Years of experiences working as a chef.</span>
                            </div>
                            <div className="text-center mt-4">
                                <Link to="/">
                                    <button className="btn btn-primary bg-purple-700">Go to Home</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-8">
                <h3 className="text-3xl font-bold text-center mb-8 pt-8">{name}'s most popular recipes!</h3>
                <div className="gap-3 w-4/5 mx-auto">
                    {recipes.map((recipe) => (
                        <div className="ml-6" key={id}>
                            <ChefRecipes recipe={recipe} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;
