import { CreateUserController } from './create-user.controller';
import { DeleteUserController } from './delete-user.controller';
import { FindUserByUsernameController } from './find-user-by-username.controller';
import { UpdateUserController } from './update-user.controller';

export const userControllers = [
  CreateUserController,
  FindUserByUsernameController,
  UpdateUserController,
  DeleteUserController,
];
