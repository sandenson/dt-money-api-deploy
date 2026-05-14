import { Body, Controller, Param, Patch } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UpdateUserDTO } from '../dto/update-user.dto';
import { UpdateUserService } from '../services/update-user.service';

@ApiTags('users')
@Controller('users')
export class UpdateUserController {
  constructor(private readonly updateUserService: UpdateUserService) {}

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateUserDTO) {
    return this.updateUserService.update(id, dto);
  }
}
