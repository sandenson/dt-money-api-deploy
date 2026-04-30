import { Controller, Get, Res, HttpStatus } from "@nestjs/common";
import { GetTransactionsService } from "../services/get-transactions.service";
import type { Response } from 'express';

@Controller('transactions')
export class GetTransactionsController {
    constructor( private readonly getTransactionsService: GetTransactionsService){
        
    }

    @Get('')
    async getTransactions(@Res() res: Response) {
    const transactions = await this.getTransactionsService.execute();
    return res.status(HttpStatus.OK).json(transactions);
    }

}