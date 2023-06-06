import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Wallet{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    account_number: number;

    @Column()
    account_type: number;

    @Column()
    amount: number;

    @Column()
    status: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column()
    id_user: number;

}