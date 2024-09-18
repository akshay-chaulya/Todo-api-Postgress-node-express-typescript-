import "dotenv/config";

const postgresHostUrl = process.env.POSTGRES_HOST_URL;
const postgresPassword = process.env.POSTGRES_PASSWORD

export { postgresHostUrl, postgresPassword }
