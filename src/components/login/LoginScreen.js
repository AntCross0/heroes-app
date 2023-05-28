import React from 'react';
import { useNavigate } from 'react-router-dom';




export const LoginScreen = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/marvel', { replace: true });
    }

    return (
        <div className=''>
            <h1 className='font-bold text-2xl text-white'>Login</h1>
            <button onClick={handleClick}
                className='px-2 py-2 bg-sky-400 text-white font-bold w-32 rounded text-center'>
                <p className='h-8 text-center box-content inline'>Login</p>
            </button>
        </div>
    )
}
