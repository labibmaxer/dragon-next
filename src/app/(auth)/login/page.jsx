import React from 'react';
import Link from 'next/link';
const LoginPage = () => {
    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
              <div className='w-full max-w-md p-8 bg-white rounded shadow-md'>
 <h2 className='font-bold text-3xl text-center '>login your account</h2>      
 <form  className="">
    <fieldset className="fieldset">
  <legend className="fieldset-legend">Email</legend>
  <input type="email" className="input" placeholder="Type your email" />
 </fieldset>
 <fieldset className="fieldset">
  <legend className="fieldset-legend">Password</legend>
  <input type="password" className="input" placeholder="Type your password" />
 </fieldset>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>

 </form>
 <p className="text-center text-sm text-gray-600">
   {/* Don't have an account?  */}
   dont have an account?
   <Link href="/register" className="font-medium text-blue-600 hover:text-blue-500">Register here</Link>
 </p>
            </div>
        </div>
    );
};

export default LoginPage;