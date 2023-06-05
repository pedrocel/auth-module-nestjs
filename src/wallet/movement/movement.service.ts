import { InjectRepository } from "@nestjs/typeorm";
import { Movement } from "./movement.entity";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import * as jwt from 'jsonwebtoken';

@Injectable()
export class MovementService{
    constructor(
        @InjectRepository(Movement)
        private readonly movementRepository: Repository<Movement>
    ){}

    async createMovement(movement: Movement, token: string){

        const verifyValidate = this.validateToken(token);

        const createMvement = await this.movementRepository.save(movement);

        return createMvement;
    }

    async getMovements(token: string){

        const verifyValidate = this.validateToken(token);

        const movements = await this.movementRepository.find();

        return movements;
    }

    private validateToken(token: string) {
        const secretKey = 'your-secret-key'; // Defina sua chave secreta aqui
    
        try {
          const decodedToken = jwt.verify(token, secretKey) as { userId: number };
          return decodedToken.userId;
        } catch (error) {
          throw new Error('Invalid token');
        }   
    }

}