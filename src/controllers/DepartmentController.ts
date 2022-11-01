import {Request, Response} from 'express';
import { ObjectID } from 'typeorm';
import { departmentRepository } from '../repositories/DepartmentRepository';

export class DepartmentController{

  async createDepartment(req: Request, res: Response){
    try {
      const department = departmentRepository.create({
        nome: req.body.nome,
      });
      await departmentRepository.save(department);
      return res.status(200).json(department);
      
    } catch (error) {
      console.log(error);
      return res.status(500).json({message: 'Internal server error'})      
    }
  }

  async getOneDepartment(req: Request, res: Response){
    try {
      const { id } = req.params;
      const department = await departmentRepository.findOneBy({ 
        id: Number(id) 
      });
      return res.status(200).json(department);

    } catch (error) {
      console.log(error);
      return res.status(500).json({message: 'Internal server error'});      
    }
  }

  async getAllDepartments(req: Request, res: Response){
    try {
      const departments = await departmentRepository.find({
        relations: {
          employess: true
        }
      });
      return res.status(200).json(departments);

    } catch (error) {
      console.log(error);
      return res.status(500).json({message: 'Internal server error'});      
    }
  }

  async deleteDepartment(req: Request, res: Response){
    try {
      const { id } = req.params;
      await departmentRepository.delete(id);
      return res.status(200).json({message: 'Departamento deletado'});

    } catch (error) {
      console.log(error);
      return res.status(500).json({message: 'Internal server error'});     
    }
  }

}