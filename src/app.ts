import express from 'express';
import routesEmployee from './routes/employee';
import routesLogin from './routes/Login'
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());


app.use(routesEmployee);
app.use(routesLogin);

//app.use(express.json())

export default app;


/*

npm install cors
npm install --save-dev @types/cors


*/