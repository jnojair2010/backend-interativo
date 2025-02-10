import mariadb from 'mariadb';

const pool = mariadb.createPool({

    host:"localhost",
    user:"root",
    password:"Lwx5nk@Lwx5nk",
    database:"interativo_pdv",
    connectionLimit:10
})
export default pool;