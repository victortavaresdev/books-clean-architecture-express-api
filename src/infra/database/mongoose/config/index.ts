const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const cluster = process.env.DB_CLUSTER;
const databaseName = process.env.DB_NAME;

const DATABASE_URL = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

export { DATABASE_URL };
