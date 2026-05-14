import { Controller, Delete, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteUserService } from '../services/delete-user.service';

@ApiTags('users')
@Controller('users')
export class DeleteUserController {
  constructor(private readonly deleteUserService: DeleteUserService) {}

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.deleteUserService.delete(id);
  }
}
