import connectDB from "@/lib/db";

import Post from "@/model/Post";
import { verifyJwtToken, verifyToken } from "@/lib/jwt";

export async function GET(req) {
    await connectDB() 
    try {
        const posts = await Post.find({}.limit(16).populate("authorId"))
        return new Response(JSON.stringify(posts), {status: 200})
        
    } catch (error) {
        return new Response(JSON.stringify(null), {status: 500})
    }
}


export async function POST(req) {
    await connectDB() 
    

        const accessToken = req.headers.get("authorization")
        const token = accessToken.split(' ')[1]
        const decodedToken = verifyJwtToken(token)

        if(!accessToken || !decodedToken) {
            return new Response(JSON.stringify({error: "unauthorized (wrong or expired token"}, {status: 403}))
        }
   try {
    

    const body =  await req.json()
    const newPost =  await Post.json(body)
   } catch (error) {
    
   }
}