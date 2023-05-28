import React from 'react'
import { useForm } from '../../hooks/useForm';
import { heroes } from '../data/heroes';
import HeroeCard from '../heroes/HeroeCard';

const Search = () => {

    const [formValues, handleInputChange] = useForm({
        searchText: ''
    })

    const { searchText } = formValues;

    const handleSearch = (e) => {
        e.preventDefault();
    }



    return (
        <>
            <form className='flex items-center'>
                <input
                    name='searchText'
                    autoComplete='off'
                    onChange={handleInputChange}
                    className='group outline-none p-2 py-1 my-auto transition-all ease-linear border-b-2 border-white/30 bg-sky-400 focus:border-b-2 focus:border-white placeholder:text-white focus:outline-none focus:placeholder:text-white placeholder:text-white/30'
                    type='text' placeholder='Search...'></input>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className=" w-6 h-6 justify-self-end">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <div className=' z-50 border-2 absolute rounded bg-slate-50 top-12 p-4 h-auto w-52'>
                    {
                        heroes.map((hero) => {
                            <HeroeCard key={hero.id} {...hero} />
                        })
                    }

                </div>
            </form>

        </>
    )
}

export default Search
