import app from "./app";
import cors from 'cors';

const PORT =  process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(` Servidor rodando na porta: ${PORT}`);

})