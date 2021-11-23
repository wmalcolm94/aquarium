import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Aquarium {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    size: string;
}