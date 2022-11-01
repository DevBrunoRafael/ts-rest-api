import 'express-async-errors';
import express, { NextFunction, Request, Response } from "express";
import { AppDataSource } from "./data-source";
import departmentRoutes  from "./Routes/DepartmentRoutes";
import employeeRoutes from "./Routes/EmployeeRoutes";
import { errorMiddleware } from "./middlewares/error";


AppDataSource.initialize().then(() => {
  
  const app = express();
  app.use(express.json());

  app.use('/department', departmentRoutes);
  app.use('/employee', employeeRoutes);

  app.use(errorMiddleware);

  app.listen(3000, () => console.log("Server on http://localhost:3000"));

}).catch((error) => console.log(error));
