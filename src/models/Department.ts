import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Employee } from "./Employee";

@Entity('departments')
export class Department {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nome: string

  @OneToMany(() => Employee, (employee) => employee.department)
  employess: Employee[]
}