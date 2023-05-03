import React from 'react';
import { FaCalendarAlt, FaHamburger, FaRegThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    const { id, picture, name, years_experience, num_recipes, likes } = chef
    return (
        <div className='mt-12 mb-12'>
            <div className="card bg-purple-100 shadow-xl p-2 h-600">
                <figure style={{ height: '250px' }}>
                    <img src={picture} alt="Chef" style={{ width: 'auto', height: '100%', borderRadius: '0.75rem' }} />
                </figure>

                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p className='flex'><strong><FaCalendarAlt className='mr-2 mt-1'></FaCalendarAlt></strong>   {years_experience} Years of experiences working as a chef.</p>

                    <div className='flex items-center justify-center gap-12 py-2'>
                        <span className='flex items-center'><FaRegThumbsUp className='mr-2'></FaRegThumbsUp>   {likes}</span>
                        <span className='flex items-center'><strong><FaHamburger className='mr-2'></FaHamburger> </strong>   {num_recipes} of recipes.</span>
                    </div>
                    <div className="card-actions">
                        <Link to={`/chef-details/${id}`}>
                            <button className="btn btn-primary bg-purple-700">View Recipes</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;