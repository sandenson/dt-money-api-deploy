import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client';
import { User } from 'generated/prisma/client';
import { UserWhereUniqueInput } from 'generated/prisma/models';
import { UserNoPwd } from 'src/modules/users/types';
import { PrismaService } from 'src/shared/prisma.service';
import { CreateUserDTO } from '../../../dto/create-user.dto';
import { UpdateUserDTO } from '../../../dto/update-user.dto';
import { IUserRepository } from '../user.repository.abstract';

@Injectable()
export class PrismaUserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDTO): Promise<UserNoPwd> {
    try {
      return await this.prisma.user.create({
        data,
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new BadRequestException('Email or username already in use');
      }

      throw error;
    }
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }

  private async findBy(
    field: 'id' | 'email' | 'username',
    value: string,
  ): Promise<UserNoPwd> {
    const where = {
      [field]: value,
    } as unknown as UserWhereUniqueInput;

    const existsUser = await this.prisma.user.findUnique({
      where,
    });

    if (!existsUser) {
      throw new NotFoundException('User not found');
    }

    return existsUser;
  }

  async findById(id: string): Promise<UserNoPwd> {
    return this.findBy('id', id);
  }

  async findByEmail(email: string): Promise<UserNoPwd> {
    return this.findBy('email', email);
  }

  async findByUsername(username: string): Promise<UserNoPwd> {
    return this.findBy('username', username);
  }

  async delete(id: string) {
    await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }

  async update(id: string, data: UpdateUserDTO) {
    try {
      return await this.prisma.user.update({
        where: { id },
        data,
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new BadRequestException('Email or username already in use');
      }

      throw error;
    }
  }
}
