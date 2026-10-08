import { type Request, type Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'

export interface authInterface {
    id_func:string
    nome: string,
}

export interface payloadJWT extends Request {
    user?:authInterface
}


export default const ValidarLogin = (req: Request, res: Response, next:NextFunction) => {
    const header = req.header
    
}