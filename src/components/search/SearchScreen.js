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
