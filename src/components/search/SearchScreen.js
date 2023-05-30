import React, { useMemo } from 'react'
import { useForm } from '../../hooks/useForm';
import HeroeCard from '../heroes/HeroeCard';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroByName } from '../../selectors/getHeroByName';

const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);
    const [formValues, handleInputChange] = useForm({
        searchText: q
    })
    const { searchText } = formValues;

    const herofiltered = useMemo(() => (getHeroByName(q)), [q]);
    const handleSearch = (e) => {
        e.preventDefault();


        navigate(`?q=${searchText}`);
    }



    return (
        <>
            <div className='relative bg-slate-50 mx-auto flex flex-row gap-2 h-[90vh] rounded text-slate-800 overflow-auto'>

                <form onSubmit={e => handleSearch(e)} className='w-60 p-4 flex flex-col gap-y-4 rounded bg-slate-100'>
                    <label className='font-medium' >find the heroes you're looking for</label>
                    <input
                        onChange={handleInputChange}
                        name='searchText'
                        autoComplete='off'
                        value={searchText}
                        className='w-52 transition-all outline-none p-2 text-slate-800 bg-slate-200 rounded focus:outline-none focus:ring-2 focus:ring-indigo-700'
                        type='text' placeholder='Search...'></input>

                    <button type='submit' className='transition-color p-2 w-52 bg-indigo-800 rounded text-center text-white font-semibold hover:bg-indigo-900' >Search</button>
                </form>
                <div className='transition-transform ease-in-out  min-max:w-4/5 grid grid-flow-row auto-rows-[200px] grid-cols-1 md:min-[1160px]:grid-cols-2  lg:min-[1570px]:grid-cols-3  
                    gap-2 justify-items-center items-center mx-auto py-4'>
                    {
                        //validation
                        (q === '')
                        &&
                        <div>type something...</div>
                    }
                    {(q !== '' && herofiltered.length === 0) &&
                        <p>There is no hero that contains: "{q}"</p>

                    }


                    {

                        herofiltered.map((hero) => (
                            <HeroeCard className='transition-all translate-x-10' key={hero.id} {...hero} />
                        ))}
                </div>
            </div>
        </>
    )
}

export default SearchScreen


// import React, { useContext } from 'react';
// import { NavLink, Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../auth/AuthContext';
// import { types } from '../../types/types';

// const NavBar = () => {

//     const context = useContext(AuthContext);
//     const { user, dispatch } = context;
//     const navigate = useNavigate();

//     const handleLogout = (e) => {

//         e.preventDefault();
//         dispatch({ type: types.logout });

//         navigate('/login');
//     }


//     return (
//         <nav className='transition-all ease-in-out relative px-8 bg-red-300 w-full h-auto flex flex-col sm:flex-row gap-1 '>
//             <Link to='/'>
//                 <p className='h-12 text-slate-800 font-bold text-4xl mr-4'>Logo</p>
//             </Link>
//             <div className='relative flex flex-col justify-stretch sm:flex-row text-slate-800'>
//                 <NavLink to='/dc' activeclassname='active' className='w-full outline-none transition-all h-12 py-[12px] sm:w-32 hover:border-b-2 hover:border-white/60 hover:bg-red-400 font-semibold text-center'>Dc</NavLink>
//                 <NavLink to='/marvel' activeclassname='active' className='w-full outline-none transition-all h-12 py-[12px] sm:w-32 hover:border-b-2 hover:border-white/60 hover:bg-red-400 font-semibold text-center'>Marvel</NavLink>
//                 <NavLink to='/search' activeclassname='active' className='w-full outline-none transition-all h-12 py-[12px] sm:w-32 hover:border-b-2 hover:border-white/60 hover:bg-red-400 font-semibold text-center'>Search</NavLink>
//             </div>
//             <div className=' sm:ml-auto my-auto flex flex-col justify-stretch sm:flex-row gap-2 text-slate-800'>
//                 <span className='text-center my-auto font-medium underline text-slate-800 px-4' >{user.name}</span>
//                 <button
//                     onClick={handleLogout}
//                     className='outline-none rounded bg-red-400 transition-all h-8 w-full sm:w-24 hover:border-b-2 hover:border-white/60 hover:bg-red-500 font-semibold text-center py-[4px]'>Logout</button>
//             </div>
//         </nav>
//     )
// }
// export default NavBar