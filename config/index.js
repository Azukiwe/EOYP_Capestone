import connect from 'dotenv'
import {createPool} from 'mysql2'

const dotenv = connect
dotenv.config();

const connection = createPool({
    host: process.env.dbHost,
    user: process.env.dbUser,
    password: process.env.dbPwd,
    port: process.env.dbPort,
    database: process.env.dbName,
    multipleStatements: true
});

export default connection;