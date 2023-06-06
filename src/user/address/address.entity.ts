import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
    @Entity()
export class Address{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_user: number;

    @Column()
    street: string;

    @Column()
    number: string;
    
    @Column()
    province: string;

    @Column()
    country: string;

    @Column()
    state: string;

    @Column()
    city: string;

    @Column()
    zip_code: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}