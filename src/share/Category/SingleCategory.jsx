import React from 'react';

const SingleCategory = ({category}) => {
    const {title, img} = category;
    return (
        <div className=''>
            <div>
                <img className='md:w-44 md:h-44 w-52 h-52 rounded-full hover:rotate-90 mx-auto mb-2 font-semibold' src={img} alt="" />
                <h3 className='text-2xl text-center'>{title}</h3>
            </div>
        </div>
    );
};

export default SingleCategory;