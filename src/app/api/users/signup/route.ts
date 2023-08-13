import { connectdb } from "@/dbConfig/dbconfig";
import User from "@/Models/userModel";
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
connectdb()

export async function POST(request : NextRequest){
    try{
        const reqBody = await request.json();
        const {username,email,password} = reqBody;
        const checkemail = await User.findOne({email});
        if(checkemail){
            return NextResponse.json(
                {message: "Email already Exists"},
                {status : 500}    
            )    
        }
        else{
            const salt = await bcryptjs.genSalt(10);
            const hashedpass = await bcryptjs.hash(password,salt);
            const newuser = new User({
                username,
                email,
                password : hashedpass
            })
            const saveuser = await newuser.save();
            return NextResponse.json(
                {message: "User Saved"},
                {status : 200}    
            )  

        }
    }
    catch (error:any){
        return NextResponse.json(
            {error: error.message},
            {status : 500}    
        )
    }
}