import { Injectable } from '@nestjs/common';
import { UpdateUserDTO } from '../dto/update-user.dto';
import { IUserRepository } from '../infra/repositories/user.repository.abstract';

@Injectable()
export class UpdateUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  update(id: string, dto: UpdateUserDTO) {
    return this.userRepository.update(id, dto);
  }
}
