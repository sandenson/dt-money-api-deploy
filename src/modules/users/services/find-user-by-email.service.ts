import { Injectable } from '@nestjs/common';
import { IUserRepository } from '../infra/repositories/user.repository.abstract';
import { UserNoPwd } from '../types';

@Injectable()
export class FindUserByEmailService {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(email: string): Promise<UserNoPwd> {
    return this.userRepository.findByEmail(email);
  }
}
