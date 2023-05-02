import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  BoltIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/solid'


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    

    return (
        <div className='w-full md:w-5/6 mx-auto px-3'>
        <div className=' py-5 mx-auto '>
            <div className='relative flex items-center justify-between'>
                {/* Logo Section */}
                <Link to='/' className='inline-flex items-center'>
                    <img className='w-36 md:w-44' src="https://149410494.v2.pressablecdn.com/wp-content/themes/thatix-progression/images/logo.png" alt="" />
                </Link>

                {/* Nav Items Section */}
                <ul className='items-center hidden space-x-8 lg:flex text-lg'>
                <li>
                    <NavLink
                    to='/'
                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/blog'
                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                    Blog
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink
                    to='/login'
                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                    Login
                    </NavLink>
                </li> */}
                
                </ul>

                <Link to='/login' className='inline-flex md:block items-center'>
                <button className='btn bg-orange-400 border-none'>Login</button>
                </Link>

                {/* Mobile Navbar Section */}
                <div className='lg:hidden '>
                {/* Dropdown Open Button */}
                <button
                    aria-label='Open Menu'
                    title='Open Menu'
                    onClick={() => setIsMenuOpen(true)}
                >
                    <Bars3Icon className='w-5 text-gray-500' />
                </button>
                {isMenuOpen && (
                    <div className='absolute top-0 left-0 w-full z-10 '>
                    <div className='p-5 bg-slate-900 text-white border rounded shadow-sm'>
                        {/* Logo & Button section */}
                        <div className='flex items-center justify-between mb-4'>
                        <div>
                            <Link to='/' className='inline-flex items-center'>
                                <img src='' alt="" />
                            </Link>
                        </div>
                        {/* Dropdown menu close button */}
                        <div>
                            <button
                            aria-label='Close Menu'
                            title='Close Menu'
                            onClick={() => setIsMenuOpen(false)}
                            >
                            <XMarkIcon className='w-5 text-gray-500' />
                            </button>
                        </div>
                        </div>
                        {/* Mobile Nav Items Section */}
                        <nav>
                        <ul className='space-y-4 text-white'>
                            <li>
                            <Link to='/' className='default'>
                                Home
                            </Link>
                            </li>
                            <li>
                            <Link
                                to='/Blog'
                                className='font-medium tracking-wide  transition-colors duration-200 hover:text-blue-400'
                            >
                                Blog
                            </Link>
                            </li>
                            <li>
                            <Link
                                to='/login'
                                className='font-medium tracking-wide  transition-colors duration-200 hover:text-blue-400'
                            >
                                Login
                            </Link>
                            </li>
                        </ul>
                        <Link to='/register' className='inline-flex mt-5 items-center  transition-colors duration-200 hover:text-blue-400'>
                            <button className='btn'>Register</button>
                        </Link>
                        </nav>
                    </div>
                    </div>
                )}
                </div>
            </div>
        </div>
    </div>
    );
};

export default Navbar;