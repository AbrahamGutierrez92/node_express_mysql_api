import { pool } from "../db.js";

export const getEmpleados = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM  empleados");
    res.json(rows);
  } catch (error) {
    return res.status(505).json({
      message: "hay un Error del servidor",
    });
  }
};

export const getEmpleado = async (req, res) => {
  try {
    const [getUnico] = await pool.query(
      "SELECT * FROM empleados WHERE id = ?",
      [req.params.id]
    );
    if (getUnico.length <= 0)
      return res.status(404).json({
        message: "Empleado no encontrado",
      });
    res.json(getUnico);
  } catch (error) {
    return res.status(505).json({
      message: "hay un Error del servidor",
    });
  }
};

export const createEmpleados = async (req, res) => {
  try {
    const { name, salary } = req.body;
    await pool.query("INSERT INTO empleados (name, salary) value(?,?)", [
      name,
      salary,
    ]);

    res.send("post success");
  } catch (error) {
    return res.status(505).json({
      message: "hay un Error del servidor",
    });
  }
};

export const patchEmpleados = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, salary } = req.body;

    const [putEmplado] = await pool.query(
      "UPDATE empleados SET name = IFNULL(?, name) , salary = IFNULL(?, salary) WHERE id = ?",
      [name, salary, id]
    );
    res.json(putEmplado);
  } catch (error) {
    return res.status(505).json({
      message: "hay un Error del servidor",
    });
  }
};

export const deleteEmpleados = async (req, res) => {
  try{
    const [deleteUnico] = await pool.query("DELETE FROM empleados WHERE id = ?", [
        req.params.id,
      ]);
    
      if (deleteUnico.affectedRows <= 0)
        return res.status(404).json({
          message: "No Elimino itms de solicitud",
        });
      res.sendStatus(204);
  }catch(error){
    return res.status(505).json({
        message: "hay un Error del servidor",
      });
  }
};

