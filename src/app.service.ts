import { Injectable, NotFoundException } from '@nestjs/common';
import { ITransactionRepository } from './infra/repositories/transaction.repository.abstract';

@Injectable()
export class AppService {
  
  getHello(): string {
    return 'Hello World!';
  }

}
