import { Controller, Get, Query, Param } from '@nestjs/common';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
  constructor(private readonly register: RegisterService) {}
  @Get()
  list() {
    return 'registers';
  }
}
