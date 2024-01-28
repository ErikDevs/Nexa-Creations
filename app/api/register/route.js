import User from "@/model/User";
import bcrypt from 'bcrypt'
import dbconnect from '@/lib/db'

export const POST = async (req) => {
    try {

        await dbconnect()

        const {username, email, password: pass} = await req.json()

        const isExisting = await User.findOne({email})

        if(isExisting) {
            throw new Error("user already exists")
        } else

        {const hashedPassword = await bcrypt.hash(pass, 10)

        const newUser = await User.create({username, email, password: hashedPassword})
        return new Response(JSON.stringify(newUser), {status: 201})
    }
 
    } catch (error) {
        return new Response(JSON.stringify(error.message), {status: 500})
    }
}

