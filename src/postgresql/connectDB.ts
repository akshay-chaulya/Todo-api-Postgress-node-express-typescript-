import { exit } from "process";
import getPool from "./getPool"
import { usersTableQuery, todosTableQuery } from "./tableQuerys"

async function connectDB() {
    try {
        const pool = await getPool();
        // creating user table
        await pool.query(usersTableQuery);
        // creating todos table
        await pool.query(todosTableQuery);
        console.log("Tables created successfull.");
    } catch (error) {
        console.log("Error occured in table creation:- ", error);
        exit(1);
    }
}

export default connectDB;