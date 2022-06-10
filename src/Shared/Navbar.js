import React from 'react';
import { TiThMenuOutline } from 'react-icons/ti'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <>
        <Link className='mt-4 ml-4 mb-[2.6rem] w-[8rem] text-center' to="/"><li className='neon-button'>Home</li></Link>
        <Link className='ml-4 w-[8rem] mb-[2.6rem] text-center' to="/projects"><li className='neon-button '>Projects</li></Link>
        <Link className='ml-4 w-[8rem] mb-[2.6rem] text-center' to="/blog"><li className='neon-button '>Blogs</li></Link>
        <Link className='ml-4 w-[8rem] mb-[2.6rem] text-center' to="/about-me"><li className='neon-button '>About Me</li></Link>
        <Link className='ml-4 w-[8rem] mb-[4rem] text-center' to="/contact-me"><li className='neon-button '>Contact Me</li></Link>
    </>
    return (
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="neon-text lg:hidden">
                        <TiThMenuOutline className='h-5 w-5'></TiThMenuOutline>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact  dropdown-content bg-black h-[25rem] rounded-box w-[10rem] mt-[1rem] bg-gray-900">
                        {menuItems}
                    </ul>
                </div>
                {/* Logo Div */}
                {/* <div></div> */}
                <div className='navbar-center hidden lg:flex'>
                    <ul className="menu menu-horizontal p-0 mx-[10rem] ">
                        <Link className='mr-[4rem]' to="/"><li className='neon-button '>Home</li></Link>
                        <Link className='mr-[4rem]' to="/projects"><li className='neon-button '>Projects</li></Link>
                        <Link className='mr-[4rem]' to="/blog"><li className='neon-button '>Blogs</li></Link>
                        <Link className='mr-[4rem]' to="/about-me"><li className='neon-button '>About Me</li></Link>
                        <Link className='mr-[4rem]' to="/contact-me"><li className='neon-button '>Contact Me</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;