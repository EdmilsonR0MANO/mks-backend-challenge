import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/service/auth.service';
import { JwtStrategy } from './auth/strategies/jwt-strategy';
import { AuthModule } from './auth/auth.module';
import { JwtService } from '@nestjs/jwt';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'password',
      database: 'mydatabase',
      entities: [User, ],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    TypeOrmModule.forFeature([User]),
  ],

  providers: [AuthService, JwtService, JwtStrategy],
})
export class AppModule {}