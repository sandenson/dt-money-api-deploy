import { Transaction } from 'generated/prisma/client';
import { CreateTransactionDTO } from '../../dto/create-transaction.dto';
import { UpdateTransactionDTO } from '../../dto/update-transaction.dto';

export abstract class ITransactionRepository {
  abstract create(data: CreateTransactionDTO): Promise<Transaction>;
  abstract findAll(): Promise<Transaction[]>;
  abstract findById(id: string): Promise<Transaction>;
  abstract delete(id: string): Promise<void>;
  abstract update(id: string, data: UpdateTransactionDTO): Promise<Transaction>;
}
