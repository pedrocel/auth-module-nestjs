import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Movement{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string

    @Column()
    amount: number;

    @Column()
    status: number;

    @Column()
    type: number;

    @Column()
    id_sent: number;

    @Column()
    id_received: number;
   
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}