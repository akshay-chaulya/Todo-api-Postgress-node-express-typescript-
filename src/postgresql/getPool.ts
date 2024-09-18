import { Pool } from "pg"
import { postgresHostUrl, postgresPassword } from "../config"
import { exit } from "process";

const getPool = async () => {
    const pool = new Pool(
        {
            host: postgresHostUrl,
            port: 5432,
            user: "postgres",
            database: "initial_db",
            password: postgresPassword,

            ssl: {
                rejectUnauthorized: false, // Adjust based on your environment; true for production.
            },
        }
    )

    try {
        await pool.connect()
        console.log("DB connected successfuly!");
        return pool
    } catch (error) {
        console.log("Error occured in DB connection!", error);
        exit(1);
    }
}

export default getPool;