import { Injectable } from "@nestjs/common";
import { CreateTransactionDTO } from "src/dto/create-transaction.dto";
import { ITransactionRepository } from "src/infra/repositories/transaction.repository.abstract";

@Injectable()
export class CreateTransactionService {
    constructor(private readonly transactionRepository: ITransactionRepository) {
    }
    async execute(data: CreateTransactionDTO) {
        const transaction = await this.transactionRepository.create(data);  
        return transaction;
    }
}
