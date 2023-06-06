import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { User } from './user/user.entity';
import { Contact } from './contact/contact.entity';
import { ContactController } from './contact/contact.controller';
import { ContactService } from './contact/contact.service';
import { Movement } from './wallet/movement/movement.entity';
import { MovementController } from './wallet/movement/movement.controller';
import { MovementService } from './wallet/movement/movement.service';
import { AddressController } from './user/address/address.controller';
import { AddressService } from './user/address/address.service';
import { Address } from './user/address/address.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      database: 'nest_users',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Contact, Movement, Address]),
  ],
  controllers: [AppController, UserController, AuthController, ContactController, MovementController, AddressController],
  providers: [AppService, UserService, AuthService, ContactService, MovementService, AddressService],
})
export class AppModule {}
