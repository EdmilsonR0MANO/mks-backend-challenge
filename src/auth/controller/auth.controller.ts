import {
    Controller,
    HttpCode,
    HttpStatus,
    Request,
    Post,
    UseGuards,
  } from '@nestjs/common';
  import { AuthService } from '../service/auth.service';
  import { IsPublic } from '../decorators/is-public.decorator';
  import { LocalAuthGuard } from '../guards/local-auth.guard';
  import { ApiTags } from '@nestjs/swagger';
  import { AuthRequest } from '../models/AuthRequest';
  
  @ApiTags('auth')
  @Controller('auth')
  export class AuthController {
    constructor(private readonly authService: AuthService) {}
  
    @IsPublic()
    @Post('login')
    @HttpCode(HttpStatus.OK)
    @UseGuards(LocalAuthGuard)
    login(@Request() req: AuthRequest) {
      return this.authService.login(req.user);
    }
  }