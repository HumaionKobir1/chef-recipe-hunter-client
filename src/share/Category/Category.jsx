import React, { useEffect, useState } from 'react';
import SingleCategory from './SingleCategory';

const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://chef-recipe-hunter-server-humaionkobir341-gmailcom.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error.message))
    }, []);

    return (
        <div className='md:mt-16 md:mb-16 mb-8 mt-8'>
            <h3 className='text-2xl text-orange-400 font-serif text-center'>Choose a Category</h3>
            <h1 className='text-center text-5xl font-bold'>Recipe Categories</h1>

        <div className='md:flex md:gap-10 gap-7 justify-center items-center mt-10'>
            {
                categories.map(category => <SingleCategory
                    key={category.id}
                    category={category}
                ></SingleCategory> )
            }
        </div>
        </div>
    );
};

export default Category;