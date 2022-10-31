import express from "express";
import { AppDataSource } from "./data-source";


AppDataSource.initialize().then(() => {
  
  const app = express();
  app.use(express.json());
  app.listen(3000, () => console.log("Server on http://localhost:3000"));

}).catch((error) => console.log(error));
