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
            <div className='text-center  font-bold'>
                <h3 className=' py-8 text-3xl'>Our Master Chefs</h3>
                <p>Experience the authentic flavors of Thailand with our culinary experts</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-5/6 mx-auto">
                    {
                        chefs.map(chef => (
                            <div class=" p-2" key={chef.id}>
                                <Chef chef={chef} />
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;