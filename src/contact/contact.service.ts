import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Contact } from "./contact.entity";
import { Repository } from "typeorm";
import * as jwt from 'jsonwebtoken';

@Injectable()
export class ContactService {
    constructor(
        @InjectRepository(Contact)
        private readonly contactRepository: Repository<Contact>
    ){}

    async createContact(contact: Contact, token: string){

        const userId = this.getUserIdFromToken(token);

        const contactCreate = await this.contactRepository.save(contact);

        return contactCreate;
    }

    async getContacts(token: string){

        const userId = this.getUserIdFromToken(token);

        const contacts = await this.contactRepository.find();

        return contacts;
    }

    private getUserIdFromToken(token: string) {
        const secretKey = 'your-secret-key'; // Defina sua chave secreta aqui
    
        try {
          const decodedToken = jwt.verify(token, secretKey) as { userId: number };
          return decodedToken.userId;
        } catch (error) {
          throw new Error('Invalid token');
        }
      }
}