import "dotenv/config";

const postgresHostUrl = process.env.POSTGRES_HOST_URL;
const postgresPassword = process.env.POSTGRES_PASSWORD;
const jwtPasskey = process.env.JWT_PASSKEY || "jsonwebtokenpasskeyrandom93@";

export { postgresHostUrl, postgresPassword, jwtPasskey }
