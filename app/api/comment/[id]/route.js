import connectDB from "@/lib/db";
import { verifyJwtToken } from "@/lib/jwt";
import Comment from "@/model/Comments";

export async function GET(req, ctx) {
    await connectDB()

    const id = ctx.params.id

    try {

        const comments = await Comment.find({postId: id}).populate("authorId")
        return new Response(JSON.stringify(comments), {status: 200})
        
    } catch (error) {
        return new Response(JSON.stringify(null), {status: 500})
    }

}

export async function DELETE(req, ctx) {
    
    await connectDB()

    const id = ctx.params.id
    const accessToken = req.headers.get("authorization")
    const decodedToken = verifyJwtToken(token)

    if(!accessToken || !decodedToken ) {
        return new Response(JSON.stringify({ error: "unauthorized (wrong or expired token)"}, {status: 403}))
    }

    try {

        const comment =  (await Comment.findById(id)).populated("authorId")

        if(comment.authorId._id.toSting() !== decodedToken._id.toSting()) {
            return new Response(JSON.stringify({ error: "only authorized user can delete a post"}, {status: 401}))
        }

        await Comment.findByIdAndDelete(id)
        return new Response(JSON.stringify({ error: "Post deleted successfully"}, {status: s00}))
        
    } catch (error) {
        return new Response(JSON.stringify({ error: "unauthorized (wrong or expired token)"}, {status: 500}))
    }
}