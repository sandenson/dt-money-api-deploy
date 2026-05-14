import { Injectable } from '@nestjs/common';
import { IUserRepository } from '../infra/repositories/user.repository.abstract';
import { UserNoPwd } from '../types';

@Injectable()
export class FindUserByUsernameService {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(username: string): Promise<UserNoPwd> {
    return this.userRepository.findByUsername(username);
  }
}
