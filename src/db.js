import {createPool} from "mysql2/promise";


export const pool  = createPool({
    host: '192.168.0.173',
    user: 'root',
    password: 'Cft6&/171200',
    port: 3306,
    database: 'icecreamstore'
})