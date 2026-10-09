import { pool } from "../database/connection";
import { Cliente } from "../types/interface";

class ClienteService {
    async getCliente(idCliente: string) /*: Promise<Cliente> */ {
        try {
            const data = await pool.query/*<Cliente>*/("SELECT * FROM clientes WHERE id_cliente=$1", [idCliente])
            return data
        } catch (error) {
            console.error("Erro:", error)
        }
    }
    async getAllClientes(){
        try{
            const data = await pool.query("SELECT * FROM clientes")
            return data
        } catch (error) {
            console.error("Erro", error)
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