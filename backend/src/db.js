import pkg from 'pg';
const { Pool } = pkg;

const db = new Pool({
  user: "postgres",
  password: "password",
  host: "localhost",
  port: 5432,
  database: "taskdb",
});

export default db;
