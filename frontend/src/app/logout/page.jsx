"use client"
import { useState } from 'react';

const LogoutForm = () => {
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/auth/logout/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // This is equivalent to withCredentials: true in Axios
            });

            // Handle the response
            if (response.ok) {
                const data = await response.json();
                console.log('Logout success:', data);
                setSuccess(true)
                alert("Logout Success")

            } else {
                setSuccess(false)
                // Handle logout failure
                console.error('logout failed:', response.status);
            }
        } catch (error) {
            // Handle specific error cases or provide a generic error message
            console.error('Error during logout:', error);
        }
    };

    return (
        <>
            <h1 className='w-full text-center mt-5 text-3xl '>Logout?</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto my-4 p-6 bg-white shadow-md rounded-md">
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                >
                    Logout
                </button>
            </form>
            <div className={`${success ? 'bg-green-400' : 'bg-gray-700'} w-full text-center h-20`}>
                Success?
            </div>
        </>


    );
};

export default LogoutForm;
