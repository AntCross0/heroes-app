import React from 'react'

const MarvelScreen = () => {
    return (
        <div>
            <h1>Marvel Screen</h1>
        </div>
    )
}

export default MarvelScreen

// import React from 'react';
// import { NavLink, Link } from 'react-router-dom';

// const NavBar = () => {
//     return (
//         <nav className='transition-all ease-in-out relative px-8 bg-sky-400 w-full h-12 grid grid-cols-3 md:grid-cols-[180px_minmax(200px,_1fr)_300px] gap-1 justify-items-stretch'>
//             <Link to='/'>
//                 <h2 className='h-12 font-bold text-4xl'>Logo</h2>
//             </Link>
//             <div className='relative flex flex-row'>
//                 <NavLink to='/dc' activeclassname='active' className='outline-none transition-all h-12 py-[12px] w-32 hover:border-b-2 hover:border-white/60 hover:bg-sky-500 font-semibold text-center'>Dc</NavLink>
//                 <NavLink to='/marvel' activeclassname='active' className='outline-none transition-all h-12 py-[12px] w-32 hover:border-b-2 hover:border-white/60 hover:bg-sky-500 font-semibold text-center'>Marvel</NavLink>
//             </div>
//             <div className='justify-self-end my-auto inline-flex gap-2'>
//                 <form className='flex items-center'>
//                     <input className='outline-none p-2 py-1 my-auto transition-all ease-linear border-b-2 border-white/30 bg-sky-400 focus:border-b-2 focus:border-white placeholder:text-white focus:outline-none'
//                         type='text' placeholder='Search...'></input>
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className=" w-6 h-6 justify-self-end">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
//                     </svg>

//                 </form>
//                 <Link to='/login' className='outline-none rounded bg-red-400 transition-all h-8 w-24 hover:border-b-2 hover:border-white/60 hover:bg-red-500 font-semibold text-center py-[4px]'>Logout</Link>
//             </div>
//         </nav>
//     )
// }

// export default NavBar