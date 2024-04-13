import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const createdUser = await this.usersService.create(createUserDto);
    return createdUser;
  }

  @Get(':id')
  async findOneById(
    @Param('username') username: string,
  ): Promise<User | undefined> {
    const user = await this.usersService.findOne(username);
    return user;
  }
}