import {
  Controller,
  HttpCode,
  HttpStatus,
  Request,
  Post,
  UseGuards,
  Body,
} from "@nestjs/common";
import { AuthService } from "../service/auth.service";
import { IsPublic } from "../decorators/is-public.decorator";
import { LocalAuthGuard } from "../guards/local-auth.guard";
import { ApiTags } from "@nestjs/swagger";
import { AuthRequest } from "../models/AuthRequest";
import { CreateUserDto } from "src/users/dto/create-user.dto";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @Post("signin")
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  signin(@Request() req: AuthRequest) {
    return this.authService.signin(req.user);
  }

  @IsPublic()
  @Post("signup")
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.signup(createUserDto);
  }
}
