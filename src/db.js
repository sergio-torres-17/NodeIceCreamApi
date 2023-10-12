import {createPool} from "mysql2/promise";


export const pool  = createPool({
    host: '192.168.0.173',
    user: 'root',
    password: 'Enter#1712',
    port: 3306,
    database: 'icecreamdatabase'
})