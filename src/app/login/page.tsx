"use client";
import next from "next/types";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import {axios} from "axios";

export default function loginpafe(){
    const [user ,  setUser] = React.useState({
        email : '',
        password : '',
    })

    const onLogin = async () => {

    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Login</h1>
           
            <label htmlFor="email">email</label>
            <input className="p-2" type="text" id="email" value={user.email} onChange={(e) => setUser({...user,email:e.target.value})} placeholder="Enter Your username"/>
               
            <label htmlFor="password">password</label>
            <input className="p-2" type="password" id="password" value={user.password} onChange={(e) => setUser({...user,password:e.target.value})} placeholder="Enter Your username"/>

            <button onClick={onLogin}>Login here </button>
            <Link href="/signup">Visit Signup</Link>
        </div>
    )
}