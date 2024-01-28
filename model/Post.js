import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 4
    },
    desc: {
        type: String,
        required: true,
        min: 6
    },
    category: {
        type: String,
        required: true,
        enum: [
            "graphics",
            "socialmedia",
            "digitalmarketing",
            "webdev",
            "googleads",
            "branding",
            "seo",
            "uxui"

        ]
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    likes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User" ,
        default: []
    }
}, {timestamps: true});


const Post = mongoose.model("Post", postSchema)

export default Post