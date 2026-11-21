'use client'
import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
const LoginPage = () => {

    const {register, handleSubmit, formState: {errors}} = useForm()
const handleloginfuc = (data) => {
 console.log(data);
 console.log(errors );
 
 

}



    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
              <div className='w-full max-w-md p-8 bg-white rounded shadow-md'>
 <h2 className='font-bold text-3xl text-center '>login your account</h2>      
 <form  className="space-y-4" onSubmit={handleSubmit(handleloginfuc)}>
    <fieldset className="fieldset" >
  <legend className="fieldset-legend">Email</legend>
  <input type="email" className="input w-full" 
   {...register('email',  {required: true })}
  placeholder="Type your email" />
 </fieldset>
 <fieldset className="fieldset">
  <legend className="fieldset-legend">Password</legend>
  <input type="password" className="input w-full" 
  {...register('password',  {required: true })}
  placeholder="Type your password" />
  { errors.password && <p>Enter password</p>}
 </fieldset>
  <button className=" bg-blue-500 btn w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>

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