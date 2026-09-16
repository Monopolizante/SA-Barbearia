import express, {Request, Response} from 'express'
import { randomUUID } from 'node:crypto'
import { clienteRouter } from './routes/cliente.route'
const port = 3000
const app = express()


app.use(express.json())

app.use("cliente/:id", clienteRouter)

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