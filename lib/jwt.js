import { Jwt } from "jsonwebtoken";

export function signJwtToken(payload, options = {}) {
    const secret = process.env.JWT_SECRET;
}

export function verifyJwtToken(token) {
    try {

        const secret = process.env.JWT_SECRET;
        const payload = jwt.verify(token, secret)
        
    } catch (error) {
       console.error(error)  
       return null 
    }
}