import express, {Request, Response} from 'express'
import { randomUUID } from 'node:crypto'
const port = 3000
const app = express()


app.use(express.json())

app.get("/teste-get", (req: Request, res:Response) =>{
    return res.json({
        status: "ok"
    })
})

app.post("/teste-post", (req: Request<object, object, CreateUser>, res:Response) => {
    const name = req.body.name?.trim()
    if(!name){
        return res.status(401).json({
            error: "Name is required"
        })
    }
    return res.status(201).json({
        id: randomUUID(),
        name 
    })
})

app.listen(3000, () => {
    console.log(`Listening on port ${port}`)
})

interface CreateUser {
    name: string
}