import express from 'express';

import routesEmployee from './routes/router_Employee'
import routesLogin from './routes/router_Login';
import routesProduct from './routes/router_Product';
import routesSupplier from './routes/supllier'
import cors from 'cors';
import bodyParser from 'body-parser';
import routesCompany from './routes/router_company';

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json())


app.use(routesEmployee);
app.use(routesLogin);
app.use(routesProduct);
app.use(routesSupplier);
app.use(routesCompany)

app.use(express.json())

export default app;


/*

npm install cors
npm install --save-dev @types/cors


*/

