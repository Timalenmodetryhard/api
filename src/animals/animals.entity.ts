import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('animal')
export class Animal {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column({ type: 'date' })
    dateOfBirth: string;
    @Column()
    species: string;
    @Column()
    breed: string;
    @Column()
    color: string;
    @Column()
    weight: string;
    @Column()
    ownerId: number;
}