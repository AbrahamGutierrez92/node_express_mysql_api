import express from 'express';
//import index from './routes/index.routes.js';
import empleadosRoutes  from './routes/empleados.routes.js';
import {PORT} from './config.js';

const app = express();

app.use(express.json())

//app.use(index);
app.use(empleadosRoutes);

app.listen(PORT)
console.log(`Esta en el puerto: 3000`)
