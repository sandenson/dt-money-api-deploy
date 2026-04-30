import { Controller, Delete, HttpStatus, Param, Res } from "@nestjs/common";
import { DeleteTransactionService } from "../services/delete-transaction.service";
import type { Response } from 'express';

@Controller('transactions')
export class DeleteTransactionController {
    constructor(private readonly deleteTransactionService: DeleteTransactionService){}

    @Delete('/:id')
  async deleteTransaction(@Param('id') id: string, @Res()res: Response) {
    await this.deleteTransactionService.execute(id);
    return res.status(HttpStatus.NO_CONTENT).send();
  }
}