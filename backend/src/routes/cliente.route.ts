import express, {Router, type Response, type Request} from 'express'
import { clienteService} from '../services/cliente.service'

export const clienteRouter = Router()


clienteRouter.get("/:id", async (req: Request<{id: string }>, res:Response) => {
    const idCliente = req.params.id
    const data = await clienteService.getCliente(idCliente)
    res.json(data)
})

clienteRouter.get("/", async (req: Request, res:Response) => {
    const data = await clienteService.getAllClientes()
})

