import {Request, Response} from 'express';
import { employeeRepository } from '../repositories/EmployeeRepository';
import { departmentRepository } from '../repositories/DepartmentRepository';

export class EmployeeController{
  
  async createEmployee(req: Request, res: Response){
    try {
      const { cpf, nome, telefone } = req.body;
      const { dptId } = req.params;

      const department = await departmentRepository.findOneBy({ id: Number(dptId) });

      const employee = employeeRepository.create({
        cpf, nome, telefone, department
      });
      await employeeRepository.save(employee);
      return res.status(200).json(employee);
      
    } catch (error) {
      console.log(error);
      return res.status(500).json({message: 'Internal server error'})      
    }
  }

  async getOneEmployee(req: Request, res: Response){
    try {
      const { cpf } = req.params;
      const employee = await employeeRepository.findOneBy({ cpf });
      return res.status(200).json(employee);
    
    } catch (error) {
      console.log(error);
      return res.status(500).json({message: 'Internal server error'})      
    }
  }

  async getAllEmployees(req: Request, res: Response){
    try {
      const employees = await employeeRepository.find();
      return res.status(200).json(employees);

    } catch (error) {
      console.log(error);
      return res.status(500).json({message: 'Internal server error'})      
    }
  }

  async updateEmployee(req: Request, res: Response){
    try {
      const { nome, telefone } = req.body;
      const { cpf } = req.params;

      const employee = { nome, telefone };
      const employeeUpdated = await employeeRepository.update(cpf, employee);

      return res.status(200).json(employeeUpdated);
    
    } catch (error) {
      console.log(error);
      return res.status(500).json({message: 'Internal server error'})      
    }
  }

  async deleteEmployees(req: Request, res: Response){
    try {
      const { cpf } = req.params;
      await employeeRepository.delete(cpf);
      return res.status(200).json({message: 'empregado deletado'});

    } catch (error) {
      console.log(error);
      return res.status(500).json({message: 'Internal server error'})      
    }
  }

}