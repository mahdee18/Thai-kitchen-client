import React from 'react';
import { FaRegThumbsUp } from 'react-icons/fa';

const Chef = ({ chef }) => {
    const { id, picture, name, years_experience, num_recipes, likes } = chef
    return (
        <div className='my-12'>
            <div className="card bg-purple-100 shadow-xl p-2 h-600">
                <figure style={{ height: '250px' }}>
                    <img src={picture} alt="Chef" style={{ width: 'auto', height: '100%', borderRadius: '0.75rem' }} />
                </figure>

                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p><strong>Experience: </strong>   {years_experience} Years of experiences working as a chef.</p>

                    <div className='flex items-center justify-center gap-12 py-2'>
                        <span className='flex items-center'><FaRegThumbsUp className='mr-2'></FaRegThumbsUp>   {likes}</span>
                        <span><strong>Recipes: </strong>   {num_recipes}</span>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary bg-purple-700">View Recipes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;