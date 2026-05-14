import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from '../dto/create-user.dto';
import { IUserRepository } from '../infra/repositories/user.repository.abstract';

@Injectable()
export class CreateUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  create(createUserDTO: CreateUserDTO) {
    return this.userRepository.create(createUserDTO);
  }
}
