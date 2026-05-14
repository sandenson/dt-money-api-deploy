import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FindUserByEmailService } from '../services/find-user-by-email.service';

@ApiTags('users')
@Controller('users')
export class FindUserByEmailController {
  constructor(
    private readonly findUserByEmailService: FindUserByEmailService,
  ) {}

  @Get(':email')
  findByEmail(@Param('email') email: string) {
    return this.findUserByEmailService.execute(email);
  }
}
