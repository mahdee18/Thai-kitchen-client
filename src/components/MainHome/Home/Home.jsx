import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import { useLoaderData } from 'react-router-dom';
import Chef from '../../Chef/Chef';
import FeaturedRecipes from '../../FeaturedRecipes/FeaturedRecipes';

const Home = () => {
    const chefs = useLoaderData()
    console.log(chefs)
    return (
        <div>
            <HeroSection></HeroSection>
            <div className='text-center'>
                <h3 className="text-3xl font-bold mb-2 pt-8">Our Master Chefs</h3>
                <p className="text-lg text-gray-600 mb-8">Experience the authentic flavors of Thailand with our culinary experts</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3  w-4/5 mx-auto">
                    {
                        chefs.map(chef => (
                            <div class="ml-6" key={chef.id}>
                                <Chef chef={chef} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <FeaturedRecipes></FeaturedRecipes>

        </div>
    );
};

export default Home;