import express from "express";
import { AppDataSource } from "./data-source";
import departmentRoutes  from "./Routes/DepartmentRoutes";
import employeeRoutes from "./Routes/EmployeeRoutes";


AppDataSource.initialize().then(() => {
  
  const app = express();
  app.use(express.json());

  app.use('/department', departmentRoutes);
  app.use('/employee', employeeRoutes);

  app.listen(3000, () => console.log("Server on http://localhost:3000"));

}).catch((error) => console.log(error));
