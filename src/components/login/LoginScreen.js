import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import { useForm } from '../../hooks/useForm';




export const LoginScreen = () => {
    const userContext = useContext(AuthContext);

    const { dispatch } = userContext;
    const lastPath = localStorage.getItem('lastPath') || '/dc';

    const [formValues, handleInputChange] = useForm({
        name: ''
    });
    const { username } = formValues;

    const handleClick = () => {

        console.log(' '.trim())
        if (username === username.trim() && username !== ' ' && username.length < 12) {

            dispatch({
                type: types.login,
                payload: { name: username }
            });

            <Navigate to={lastPath} replace />
        }
        else {
            alert('Enter a valid input');
        }




    }

    return (
        <div className='bg-white w-1/5 rounded mx-auto mt-5 p-4 space-y-4'>
            <h1 className='font-bold text-2xl text-slate-800'>Login</h1>

            <form onSubmit={handleClick} className='flex flex-col space-y-8'>

                <input
                    name='username'
                    placeholder='username...'
                    required={true}
                    autoComplete='off'
                    onChange={handleInputChange}
                    className='p-2 border-2 border-slate-500 rounded text-black' type='text' ></input>

                <button type='Submit'
                    className='px-2 py-2 bg-sky-400 text-white font-bold w-32 rounded text-center hover:bg-sky-500'>
                    <p className='h-8 text-center box-content inline'>Login</p>
                </button>
            </form>
        </div>
    )
}
