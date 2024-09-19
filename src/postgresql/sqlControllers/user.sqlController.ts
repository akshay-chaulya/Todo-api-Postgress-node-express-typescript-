import { User } from "../../types"
import getPool from "../getPool"
import { getAllUserQuery, getUserByEmailQuery, userDataInsertQuery } from "../dataQuerys"

export const createUser = async ({ email, hashPassword }: User) => {
    try {
        const pool = await getPool();

        return await pool.query(userDataInsertQuery, [email, hashPassword]);
    } catch (error) {
        throw error;
    }
}

export const getUsers = async () => {
    try {
        const pool = await getPool();

        return await pool.query(getAllUserQuery)
    } catch (error) {
        throw error;
    }
}

export const getUserByEmail = async(email: string) => {
    try {
        const pool = await getPool();

        return await pool.query(getUserByEmailQuery, [email]);
    } catch (error) {
        throw error;
    }
}