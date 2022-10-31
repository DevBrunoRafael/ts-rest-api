import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Department } from "./Department";

@Entity('employees')
export class Employee {

  @PrimaryColumn()
  cpf: string

  @Column()
  nome: string
  
  @Column()
  telefone: string

  @ManyToOne(() => Department, (department) => department.employess)
  @JoinColumn({ name:  'department_id' })
  department: Department
}