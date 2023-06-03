import { Body, Controller, Get, Headers, Post } from "@nestjs/common";
import { ContactService } from "./contact.service";
import { Contact } from "./contact.entity";

@Controller('contact')
export class ContactController{
    constructor(
        private readonly contactService: ContactService
    ){}

    @Post('/create')
    postCreate(@Body() contact: Contact, @Headers('authorization') token: string){
        return this.contactService.createContact(contact, token);
    }

    @Get('/list')
    getContacts(@Headers('authorization') token: string){
        return this.contactService.getContacts(token);
    }
}