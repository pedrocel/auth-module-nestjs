import { Body, Controller, Get, Headers, Injectable, Param, Post } from "@nestjs/common";
import { Address } from "./address.entity";
import { AddressService } from "./address.service";

@Controller('address')
export class AddressController {
    constructor(
        private readonly addressService: AddressService
    ) { }

    @Post('/create')
    createAddress(@Body() address: Address, @Headers('authorization') token: string) {
        return this.addressService.createAddress(address, token);
    }


    @Get('/list')
    getList(@Headers('authorization') token: string) {
        return this.addressService.getList(token);
    }
}
