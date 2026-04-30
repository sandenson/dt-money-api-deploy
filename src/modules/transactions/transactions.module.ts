import { Module } from "@nestjs/common";
import { PrismaTransactionRepository } from "src/infra/repositories/prisma/prisma.transaction.repository";
import { ITransactionRepository } from "src/infra/repositories/transaction.repository.abstract";
import { PrismaService } from "src/shared/prisma.service";
import { transactionServices } from "./services";
import { transactionsControllers } from "./controllers";

@Module({
  imports: [],
  controllers: [...transactionsControllers],
  providers: [PrismaService, {
    provide: ITransactionRepository,
    useClass: PrismaTransactionRepository
  }, ...transactionServices]
})
export class TransactionsModule {}