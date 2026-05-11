import { User } from 'generated/prisma/client';

export type UserNoPwd = Omit<User, 'password'>;
