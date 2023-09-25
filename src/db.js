import {createPool} from "mysql2/promise";


export const pool  = createPool({
    host: 'localhost',
    user: 'root',
    password: 'Cft6&/171200',
    port: 3306,
    database: 'icecreamstore'
})