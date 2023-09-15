
import pg from "pg"
import { Pool } from 'pg';
import { ConnectiOne } from "../protocols/types";


const conectar = new Pool({
    host: "0.0.0.0",
    port: 5432,
    user: "postgres",
    password: "postgres",
    database: "RandomPeople"
  });

const db = conectar

export default db