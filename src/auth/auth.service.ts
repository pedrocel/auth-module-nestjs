import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';
import { LoginDto } from './dto/login.dto';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async login(loginDto: LoginDto) {
    const { username, password } = loginDto;
    const user = await this.userRepository.findOne({ where: { username } });

    if (!user || user.password !== password) {
      throw new Error('Invalid username or password');
    }

    const token = this.generateToken(user.id);

    return { message: 'Login successful', token };
  }

  private generateToken(userId: number) {
    const payload = { userId };
    const secretKey = 'your-secret-key'; // Defina sua chave secreta aqui
    const expiresIn = '1h'; // Defina o tempo de expiração do token aqui

    return jwt.sign(payload, secretKey, { expiresIn });
  }

  async getUsers(token: string) {
    const userId = this.getUserIdFromToken(token);
    const users = await this.userRepository.find();

    return users;
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
