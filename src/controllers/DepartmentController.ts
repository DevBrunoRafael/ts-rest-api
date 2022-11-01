import {Request, Response} from 'express';
import { ObjectID } from 'typeorm';
import { departmentRepository } from '../repositories/DepartmentRepository';

export class DepartmentController{

  async createDepartment(req: Request, res: Response){

    const department = departmentRepository.create({
      nome: req.body.nome,
    });
    
    await departmentRepository.save(department);
    return res.status(200).json(department);
  }

  async getOneDepartment(req: Request, res: Response){

    const { id } = req.params;
    const department = await departmentRepository.findOneBy({ 
      id: Number(id) 
    });

    return res.status(200).json(department);
  }

  async getAllDepartments(req: Request, res: Response){

    const departments = await departmentRepository.find({
      relations: {
        employess: true
      }
    });
    return res.status(200).json(departments);
  }

  async deleteDepartment(req: Request, res: Response){

    const { id } = req.params;
    await departmentRepository.delete(id);
    
    return res.status(200).json({message: 'Departamento deletado'});
  }

}