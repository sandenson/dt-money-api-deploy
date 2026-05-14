import { Injectable } from '@nestjs/common';
import { IUserRepository } from '../infra/repositories/user.repository.abstract';

@Injectable()
export class DeleteUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  delete(id: string) {
    return this.userRepository.delete(id);
  }
}
