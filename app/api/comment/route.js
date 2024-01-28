import connectDB from "@/lib/db";
import { verifyJwtToken } from "@/lib/jwt";
import Comment from "@/model/Comments";


export async function POST(req) {
    await connectDB()

    const accessToken = req.headers.get("authorization")
    const token = accessToken.split(' ')[1]
    const decodedToken = verifyJwtToken(token)

    if(!accessToken | !decodedToken) {
      return new Response(JSON.stringify({ error: "unauthorized (wrong or expired token)"}, {status: 403}))
    } else {
        try {

            const body = await req.json()
            let newComment =  await Comment.create(body)
            newComment = await newComment.populate("authorId")
            return new Response(JSON.stringify(newComment), {status: 201})
        } catch (error) {
            return new Response(JSON.stringify(null), {status: 500})
        }
    }
}