import { Body, Controller, Get, Headers, Post } from "@nestjs/common";
import { MovementService } from "./movement.service";
import { Movement } from "./movement.entity";

@Controller('wallet/movement')
export class MovementController{
    constructor(
        private readonly movementService: MovementService
    ){}

    @Post('/create')
    postCreate(@Body() movement: Movement, @Headers('authorization') token: string){
        return this.movementService.createMovement(movement, token);
    }

    @Get('/list')
    getMovements(@Headers('authorization') token: string){
        return this.movementService.getMovements(token);
    }
}