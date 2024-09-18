export const userDataInsertQuery = "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *";
export const todosDataInsertQuery = "INSERT INTO todos (title, description, user_id, done) VALUES ($1, $2, $3, $4) RETURNING id";
export const getAllUserQuery = "SELECT * FROM users";
export const getUserByEmailQuery = "SELECT * FROM users WHERE email = $1";
export const getTodosByUserIdQuery = "SELECT * FROM todos WHERE user_id = $1";