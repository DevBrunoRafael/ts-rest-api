import { AppDataSource } from '../data-source';
import { Department } from '../models/Department';

export const departmentRepository = AppDataSource.getRepository(Department);