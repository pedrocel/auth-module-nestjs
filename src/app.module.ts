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
    TypeOrmModule.forFeature([User, Contact, Movement]),
  ],
  controllers: [AppController, UserController, AuthController, ContactController, MovementController],
  providers: [AppService, UserService, AuthService, ContactService, MovementService],
})
export class AppModule {}
