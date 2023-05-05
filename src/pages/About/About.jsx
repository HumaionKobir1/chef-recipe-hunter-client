import React from 'react';
import bg2 from '../../images/about/aaaaaa.png'

const About = () => {
    return (
        <div className='w-full md:w-5/6 mx-auto px-3 mt-12 mb-12 md:flex  items-center bg2'>
            <div className='w-full md:w-2/3'>
                <h1 className='md:text-5xl font-bold text-3xl text-orange-700 mb-3'>Foodies start-up for passion and profession</h1>
                <p>We’re a young and smart <span className='text-lg font-semibold'>food & travel community</span> in constant evolution, always ready to create new ways of living experiences.</p>
                <p className='mt-3'>As in the best recipes, where the ingredients come together to the perfect balance, Insideat has combined the skills like they were flavors to offer unique <span className='text-lg font-semibold'>food & wine experiences</span>.</p>
            </div>
            <div>
                <img src={bg2} alt="" />
            </div>
        </div>
    );
};

export default About;