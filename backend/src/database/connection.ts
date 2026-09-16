import 'dotenv/config'
import { error } from 'node:console'
import pg from 'pg'


const { Pool } = pg

export const pool = new Pool()

pool.on("error", (error) => {
    console.error(
        "Conexão idle encontrada", error
    );
    process.exit(1)
})
