"use client";
import next from "next/types";
import Link from "next/link";
import React, {useState,useEffect} from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from "next/navigation";
import axios from "axios";

export default function signuppage(){
    const router = useRouter();
    const [user ,  setUser] = React.useState({
        email : '',
        password : '',
        username : '',
    })

    const [buttonDisabled , setButtonDisabled] = React.useState(false);
    const [Loading , setLoading] = React.useState(false);
    async function onSignup() {
        try{
            setLoading(true);
            toast.loading('Please wait');
            const response = await axios.post("api/users/signup" , user);
            if(response.status == 200){
                toast.success('User Saved!');
            }
            // router.push("/login");
        }
        catch(error : any){
            toast.error('Error while saving!' , error);
        }
    }

    // useEffect(() => {
    //     if(user.email.length > 0){
    //         setButtonDisabled(true);
    //     }
    //     else{
    //         setButtonDisabled(false);
    //     }
    // }, [user]);
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>{Loading ? "Please wait" : "Sign up"}</h1>
            <label htmlFor="username">username</label>
            <input className="p-2 text-black" type="text" id="username" value={user.username} onChange={(e) => setUser({...user,username:e.target.value})} placeholder="Enter Your username"/>

            <label htmlFor="email">email</label>
            <input className="p-2 text-black" type="text" id="email" value={user.email} onChange={(e) => setUser({...user,email:e.target.value})} placeholder="Enter Your email"/>
               
            <label htmlFor="password">password</label>
            <input className="p-2 text-black" type="password" id="password" value={user.password} onChange={(e) => setUser({...user,password:e.target.value})} placeholder="Enter Your username"/>

            <button onClick={onSignup}>Sign up</button>
            <Link href="/login">Visit Login</Link>
            <Toaster />
        </div>
    )
}