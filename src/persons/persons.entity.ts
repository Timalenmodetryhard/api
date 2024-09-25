import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('person')
export class Person {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    lastName: string;
    @Column()
    firstName: string;
    @Column()
    email: string;
    @Column()
    phoneNumber: string;
}