import { Router } from "express";
import { EmployeeController } from "../controllers/EmployeeController";


const employeeRoutes = Router();

const employeeController = new EmployeeController();

employeeRoutes.post('/:dptId', employeeController.createEmployee);
employeeRoutes.get('/:cpf', employeeController.getOneEmployee);
employeeRoutes.get('/', employeeController.getAllEmployees);
employeeRoutes.patch('/:cpf', employeeController.updateEmployee);
employeeRoutes.delete('/:cpf', employeeController.deleteEmployees);


export default employeeRoutes;