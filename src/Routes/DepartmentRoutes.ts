import { Router } from "express";
import { DepartmentController } from "../controllers/DepartmentController";


const departmentRoutes = Router();

const departmentController = new DepartmentController();

departmentRoutes.post('/', departmentController.createDepartment);
departmentRoutes.get('/:id', departmentController.getOneDepartment);
departmentRoutes.get('/', departmentController.getAllDepartments);
departmentRoutes.delete('/', departmentController.deleteDepartment);


export default departmentRoutes;
