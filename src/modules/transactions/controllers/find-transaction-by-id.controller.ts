import { Controller, Get, HttpStatus, Param, Res } from "@nestjs/common";
import { FindTransactionByIdService } from "../services/find-transaction-by-id.service";
import type { Response } from 'express'


@Controller('transactions')
export class FindTransactionByIdController {

    constructor(private readonly findTransactionById: FindTransactionByIdService){}

    @Get('/:id')
      async handle(@Param('id') id: string, @Res()res: Response) {
        const transaction = await this.findTransactionById.execute(id);
        return res.status(HttpStatus.OK).json(transaction);
      }
}