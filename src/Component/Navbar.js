import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    return (
        <div className='bg-slate-100'>
            <div className='flex items-center py-3 justify-between w-11/12 mx-auto md:max-w-[1300px]'>
                <h1 className='text-[20px] font-medium'>React with Wp</h1>
                <ul className='flex items-center text-lg  gap-2'>
                    <Link to="/" className='hove:underline hover:text-red-500'>Home</Link>
                    <Link to="/posts" className='hove:underline hover:text-red-500'>Posts</Link>
                    {
                        user ? (
                    <>
                    <Link to="/add-post" className='text-white bg-red-500 capitalize py-1 px-3 rounded-md'>Add Post</Link>
                    <Link onClick={()=>localStorage.removeItem('userInfo')} className='text-white bg-red-500  py-1 px-3 rounded-md'>Logout</Link>
                    </>) : (
                    <Link to="/login" className='hove:underline hover:text-red-500'>Login</Link>
                    )
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;