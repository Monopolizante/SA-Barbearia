import { pool } from "../database/connection";

class ClienteService {
    async getCliente(idCliente: string){
        try {
            const data = await pool.query("SELECT * FROM clientes WHERE id_cliente=$1", [idCliente])
            return data
        } catch (error) {
            console.error("Erro:", error)
        }
    }
    async inativarCliente(idCliente: string){
        try {
            const data = pool.query("SELECT * FROM clientes WHERE id_cliente=$1", [idCliente])
            
        } catch (error) {
            console.error("Erro:", error)
        }
    }
}

export const clienteService = new ClienteService()