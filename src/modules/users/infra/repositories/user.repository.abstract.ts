import { CreateUserDTO } from '../../dto/create-user.dto';
import { UpdateUserDTO } from '../../dto/update-user.dto';
import { UserNoPwd } from '../../types';

export abstract class IUserRepository {
  abstract create(data: CreateUserDTO): Promise<UserNoPwd>;
  abstract findAll(): Promise<UserNoPwd[]>;
  abstract findById(id: string): Promise<UserNoPwd>;
  abstract findByEmail(email: string): Promise<UserNoPwd>;
  abstract findByUsername(username: string): Promise<UserNoPwd>;
  abstract delete(id: string): Promise<void>;
  abstract update(id: string, data: UpdateUserDTO): Promise<UserNoPwd>;
}
