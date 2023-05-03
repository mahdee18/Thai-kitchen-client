import React from 'react';

const HeroSection = () => {
    return (
        <div className='hero pt-24 bg-slate-300'>
            <div className=" w-5/6 mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://pngimg.com/uploads/chef/chef_PNG90.png" className="w-50 h-100 rounded-lg" />
                    <div>
                        <h1 className="text-5xl font-bold">Welcome to<br />
                            Our <br />
                            <span className='text-purple-700'>Thai Kitchen</span>
                        </h1>
                        <p className="py-6 text-lg">Our traditional recipes and fresh ingredients create dishes that are bursting with flavor. From spicy curries to refreshing salads, our menu offers something for every taste preference. Visit us today to discover the delicious and diverse cuisine of Thailand.
                        </p>
                        <button className="btn btn-primary bg-purple-700">Explore Recipes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;