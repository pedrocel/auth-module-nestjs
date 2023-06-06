import { Injectable } from "@nestjs/common";
import { Address } from "./address.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class AddressService{
    constructor(
        @InjectRepository(Address)
        private readonly addressRepository: Repository<Address>
    ){}
    
    async createAddress(address: Address, token:string){
        return await this.addressRepository.save(address);
    }

    async getList(token: string){
        return await this.addressRepository.find();
    }

}