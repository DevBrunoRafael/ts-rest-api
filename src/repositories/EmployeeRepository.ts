import { AppDataSource } from '../data-source';
import { Employee } from '../models/Employee';

export const employeeRepository = AppDataSource.getRepository(Employee);