import app from "./app";
import cors from 'cors';
import { configDotenv } from "dotenv";
import 'dotenv/config';

const PORT =  process.env.PORT || 3001

app.listen(PORT, ()=>{
    console.log(` Servidor rodando na porta: ${PORT}`);

})