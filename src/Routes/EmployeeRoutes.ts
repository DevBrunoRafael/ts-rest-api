import { Router } from "express";
import { EmployeeController } from "../controllers/EmployeeController";


const employeeRoutes = Router();

const employeeController = new EmployeeController();

employeeRoutes.post('/:dptId', employeeController.createEmployee);
employeeRoutes.get('/:id', employeeController.getOneEmployee);
employeeRoutes.get('/', employeeController.getAllEmployees);
employeeRoutes.patch('/:id', employeeController.updateEmployee);
employeeRoutes.delete('/:id', employeeController.deleteEmployees);


export default employeeRoutes;