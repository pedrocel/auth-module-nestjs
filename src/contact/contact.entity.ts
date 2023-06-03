import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Contact{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phone1: string;

    @Column()
    phone2: string;

    @Column()
    instagram: string;

    @Column()
    linkedin: string;

    @Column()
    status: string;

}