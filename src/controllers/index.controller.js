import { pool } from '../db.js';

export const getIndex = async(req, res)=>{
    const [selectEmp] = await pool.query('SELECT * FROM  empleados');
    res.json(selectEmp);
}