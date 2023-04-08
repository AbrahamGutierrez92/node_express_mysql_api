import { Router } from 'express';
import { getEmpleados, getEmpleado, createEmpleados, patchEmpleados, deleteEmpleados } from '../controllers/empleados.controller.js';


const router = Router();

router.get("/empleados", getEmpleados);

router.get("/empleados/:id", getEmpleado);

router.post("/empleados", createEmpleados)

router.patch("/empleados/:id", patchEmpleados)

router.delete("/empleados/:id", deleteEmpleados)

export default router;