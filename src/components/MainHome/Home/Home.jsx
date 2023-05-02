import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import { useLoaderData } from 'react-router-dom';
import Chef from '../../Chef/Chef';

const Home = () => {
    const chefs = useLoaderData()
    console.log(chefs)
    return (
        <div>
            <HeroSection></HeroSection>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-5/6 mx-auto">
                {
                    chefs.map(chef => (
                        <div class=" p-4" key={chef.id}>
                            <Chef chef={chef} />
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Home;