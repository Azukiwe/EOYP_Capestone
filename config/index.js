import connect from 'dotenv'
import {createPool} from 'mysql'

const dotenv = connect
dotenv.config();

const connection = createPool({
    host: process.env.HOST,
    user: process.env.dbUser,
    password: process.env.dbPass,
    port: process.env.dbPort,
    database: process.env.dbName,
    multipleStatements: true
});

export default connection;