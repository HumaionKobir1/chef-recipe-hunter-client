import React from 'react';

const Banner = () => {
    return (
        <div >
            <div className='md:flex gap-8 md:gap-20 justify-between items-center w-full md:w-5/6 mx-auto mt-10 p-3'>
            <img src="https://149410494.v2.pressablecdn.com/wp-content/uploads/2020/03/images.jpg" alt="" />
                <div className='mt-5'>
                    <p className='text-2xl text-orange-500 font banner-title'>Thatix Introduction</p>
                    <h1 className='md:text-5xl text-3xl mt-3 font-bold mb-3'>Give yourself a lifetime of cooking confidence</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, words which don’t look even slightly believable. If you are going to use a passage you need to be sure text.</p>
                    <button className='btn bg-orange-400 border-none mt-5'>Discover more</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;