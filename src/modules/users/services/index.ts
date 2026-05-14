import { CreateUserService } from './create-user.service';
import { DeleteUserService } from './delete-user.service';
import { UpdateUserService } from './update-user.service';

export const userServices = [
  CreateUserService,
  UpdateUserService,
  DeleteUserService,
];
