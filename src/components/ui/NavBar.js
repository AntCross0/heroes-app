import React, { useContext } from 'react';
import { NavLink, Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

const NavBar = () => {

    const context = useContext(AuthContext);
    const { user, dispatch } = context;

    const handleLogout = (e) => {

        e.preventDefault();
        dispatch({ type: types.logout });

        <Navigate to='/login' />
    }


    return (
        <nav className='transition-all ease-in-out relative px-8 bg-red-300 w-full h-auto flex flex-col sm:flex-row gap-1 '>
            <Link to='/'>
                <p className='h-12 text-slate-800 font-bold text-4xl mr-4'>Logo</p>
            </Link>
            <div className='relative flex flex-col justify-stretch sm:flex-row text-slate-800'>
                <NavLink to='/dc' activeclassname='active' className='w-full outline-none transition-all h-12 py-[12px] sm:w-32 hover:border-b-2 hover:border-white/60 hover:bg-red-400 font-semibold text-center'>Dc</NavLink>
                <NavLink to='/marvel' activeclassname='active' className='w-full outline-none transition-all h-12 py-[12px] sm:w-32 hover:border-b-2 hover:border-white/60 hover:bg-red-400 font-semibold text-center'>Marvel</NavLink>
                <NavLink to='/search' activeclassname='active' className='w-full outline-none transition-all h-12 py-[12px] sm:w-32 hover:border-b-2 hover:border-white/60 hover:bg-red-400 font-semibold text-center'>Search</NavLink>
            </div>
            <div className=' sm:ml-auto my-auto flex flex-col justify-stretch sm:flex-row gap-2 text-slate-800'>
                <span className='text-center my-auto font-medium underline text-slate-800 px-4' >{user.name}</span>
                <button
                    onClick={handleLogout}
                    className='outline-none rounded bg-red-400 transition-all h-8 w-full sm:w-24 hover:border-b-2 hover:border-white/60 hover:bg-red-500 font-semibold text-center py-[4px]'>Logout</button>
            </div>
        </nav>
    )
}
export default NavBar