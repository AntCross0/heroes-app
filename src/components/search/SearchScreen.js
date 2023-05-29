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

    const herofiltered = useMemo(() => getHeroByName(q), [q]);
    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`);
    }



    return (
        <>
            <div className='relative bg-slate-50 mx-auto flex flex-row gap-2 h-[90vh] rounded text-slate-800 overflow-auto'>

                <form onSubmit={e => handleSearch(e)} className='relative p-4 flex flex-col gap-y-4 rounded bg-slate-100'>
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
                <div className='h-[82rem] w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(3,26rem)] 
                    gap-x-4 gap-y-2 mx-auto py-4'>
                    {
                        //validation
                        (q === '')
                        &&
                        <div>type something...</div>
                    }
                    {(q !== '' && herofiltered.length === 0) &&
                        <p>There is no hero that contains: "{q}"</p>

                    }
                    {herofiltered.map((hero) => (
                        <HeroeCard key={hero.id} {...hero} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default SearchScreen
