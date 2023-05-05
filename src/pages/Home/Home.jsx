import React from 'react';
import Category from '../../share/Category/Category';
import Chefs from '../../share/Chefs/Chefs';
import { useLoaderData } from 'react-router-dom';
import MessageForm from '../../share/MessageForm/MessageForm';

const Home = () => {
    const chefs = useLoaderData()
    return (
        <div>
            <Category></Category>
            <div className='px-3 mt-10'>

                <h3 className='text-2xl text-orange-400 font-serif text-center'>Choose a Chef</h3>
                <h1 className='text-center text-5xl font-bold'>Popular chef</h1>
                <br />
                <br />

                <div className='grid md:grid-cols-3 grid-cols-1 gap-6 justify-center items-center w-full md:w-5/6 mx-auto mb-8'>
                    {
                        chefs.map(chef => <Chefs
                            key={chef.id}
                            chef={chef}
                        ></Chefs>)
                    }
                </div>
            </div>
            <MessageForm></MessageForm>
        </div>
    );
};

export default Home;