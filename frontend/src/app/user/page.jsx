"use client"
import { useEffect, useState } from 'react';

const UserDetails = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        first_name: '',
        last_name: '',
    });
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const response = await fetch('http://localhost:8000/auth/user/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });

            if (response.ok) {
                const data = await response.json();
                setUser(data); // Update user state with fetched data
                setSuccess(true);
                console.log('User Details Success: ', data);
                alert("User Details Success");
            } else {
                setSuccess(false)
                console.error('User details failed:', response.status);
            }
        } catch (error) {
            console.error('Error getting User details:', error);
        } finally {
    
        }
    };

    return (
        <>
            <h1 className='w-full text-center mt-5 text-3xl '>User Details</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto my-4 p-6 bg-white shadow-md rounded-md">
                <label className="block mb-2">
                    <span className="text-gray-700">Username:</span>
                    <input
                        disabled
                        value={user.username}
                        className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
                    />
                </label>
                <br />
                <label className="block mb-2">
                    <span className="text-gray-700">Email:</span>
                    <input
                        disabled
                        value={user.email}
                        className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
                    />
                </label>
                <br />
                <label className="block mb-2">
                    <span className="text-gray-700">First Name:</span>
                    <input
                        disabled
                        value={user.first_name}
                        className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
                    />
                </label>
                <br />
                <label className="block mb-2">
                    <span className="text-gray-700">Last Name:</span>
                    <input
                        disabled
                        value={user.last_name}
                        className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
                    />
                </label>
                <br />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                >
                    Get User Details
                </button>
            </form>
            <div className={`${success ? 'bg-green-400' : 'bg-gray-700'} w-full text-center h-20`}>
                Success?
            </div>
        </>


    );
};

export default UserDetails;
