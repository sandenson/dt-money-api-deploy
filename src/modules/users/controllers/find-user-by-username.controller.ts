import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FindUserByUsernameService } from '../services/find-user-by-username.service';

@ApiTags('users')
@Controller('users')
export class FindUserByUsernameController {
  constructor(
    private readonly findUserByUsernameService: FindUserByUsernameService,
  ) {}

  @Get(':username')
  findByUsername(@Param('username') username: string) {
    return this.findUserByUsernameService.execute(username);
  }
}
