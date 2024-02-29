import React, { useRef, useState } from 'react'
import { RootState } from '../../util/Interface/type';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../util/auth';
import { authActions } from '../../store/authSlice';

interface FormValues {
    email: string  | undefined;
    password: string | undefined;
  }
const Authentication = () => {
const [mode,setMode]=useState(false);
const token=useSelector((state:RootState)=>state.authentication.Token);
  const dispatch=useDispatch();
  const EmailRef = useRef<HTMLInputElement>(null);
  const PasswordRef = useRef<HTMLInputElement>(null);

  //extracting value form EmainRef and PasswordRef
  function submitHandler(event:any){
    event.preventDefault();
    
      const  email = EmailRef.current?.value;
       const  password = PasswordRef.current?.value;
       let obj:FormValues={
        email:email,
        password:password
       }
       if(!mode){
           loginHandler(obj)
           return ;
        }
        signUpHandler(obj)
    
  }
  
    async function signUpHandler(obj:FormValues){
       console.log('signupHandler')
    const url="https://reqres.in/api/register";
    const data=  await signUp({...obj,url});
    dispatch(authActions.login(data.token))
    console.log(data);
    }
    

    async function loginHandler(obj:FormValues) {
      
    const url="https://reqres.in/api/login";
    const data=  await signUp({...obj,url});
    dispatch(authActions.login(data.token))
    console.log(data);
    }

    function changeHandler(){
        setMode(val=>!val);
    }
  return (
    <>
        <h1 className="max-w-sm mx-auto text-center text-5xl">{mode?'signUp':'Login'}</h1>
         <form onSubmit={submitHandler} className="max-w-sm mx-auto">
        <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input ref={EmailRef} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
        </div>
        <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input ref={PasswordRef} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
    
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        <button onClick={changeHandler} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-3">{ mode ? 'go to Login':'go to signUp'}</button>
    </form>
    </>
   

  )
}

export default Authentication