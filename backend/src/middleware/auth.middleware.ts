import { type Request, type Response, NextFunction, response} from 'express'
import jwt from 'jsonwebtoken'
import "dotenv/config"


export interface authInterface {
    id_func:string
    nome: string
    email: string
}

export interface payloadJWT extends Request {
    user?:authInterface
}


export const ValidarLogin = (req: payloadJWT, res: Response, next:NextFunction) => {
    const authHeader = req.headers.authorization
    if (!authHeader) {
        throw new Error("Autorização não providenciado");
    }
    const [, token] = authHeader.split(" ")

    const CHAVE_SECRETA = process.env.CHAVE_SECRETA

    if (!CHAVE_SECRETA) {
        throw new Error("Chave não configurada");
    }
    try {
        const tokenDecodificado = jwt.verify(token, CHAVE_SECRETA ) as authInterface
        req.user = tokenDecodificado

        return next()
        
    } catch (error) {
        throw new Error("Token não válido:", error as Error);
    }


}

export default ValidarLogin