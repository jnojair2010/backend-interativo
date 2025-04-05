import mariadb from 'mariadb';
import 'dotenv/config';

 const  pool = mariadb.createPool({

    host:"localhost",
    user:"root",
    password:"Lwx5nk@Lwx5nk",
    database:process.env.DATABASE,
    connectionLimit:3
})
export default pool;