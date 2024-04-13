import {
  Controller,
  HttpCode,
  HttpStatus,
  Request,
  Post,
  UseGuards,
  Body,
  ValidationPipe,
} from "@nestjs/common";
import { AuthService } from "../service/auth.service";
import { IsPublic } from "../decorators/is-public.decorator";
import { LocalAuthGuard } from "../guards/local-auth.guard";
import { ApiTags } from "@nestjs/swagger";
import { AuthRequest } from "../models/AuthRequest";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { SignInDto } from "src/users/dto/sigin-user.dto";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signin")
  @HttpCode(HttpStatus.OK)
  async signin(@Body(ValidationPipe) signinDto: SignInDto) {
    const { username, password } = signinDto;
    const token = await this.authService.signin(username, password);
    return { token };
  }

  @IsPublic()
  @Post("signup")
  @HttpCode(HttpStatus.CREATED)
  async register(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.authService.signup(createUserDto);
  }
}
