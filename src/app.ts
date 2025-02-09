import express from 'express';
import routesEmployee from './routes/router_Employee'
import routesLogin from './routes/router_login';
import routesProduct from './routes/product';
import routesSupplier from './routes/supllier'
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());


app.use(routesEmployee);
app.use(routesLogin);
app.use(routesProduct);
app.use(routesSupplier);

app.use(express.json())

export default app;


/*

npm install cors
npm install --save-dev @types/cors


*/