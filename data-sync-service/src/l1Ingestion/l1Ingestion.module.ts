import { Module } from '@nestjs/common';
import { L1IngestionService } from './l1Ingestion.service';
import { L1IngestionController } from './l1Ingestion.controller';
import { L2IngestionModule } from '../l2Ingestion/l2Ingestion.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import {
  L1RelayedMessageEvents,
  L1SentMessageEvents,
  StateBatches,
  TxnBatches,
  L2ToL1,
  L1ToL2,
  Transactions,
  Tokens,
  DaBatches,
  DaBatchTransactions,
  TokenPriceHistory,
} from 'src/typeorm';
import { EigenlayerModule } from '../grpc/eigenlayer.module';


@Module({
  imports: [
    L2IngestionModule,
    HttpModule,
    TypeOrmModule.forFeature([
      L1RelayedMessageEvents,
      L1SentMessageEvents,
      StateBatches,
      TxnBatches,
      L2ToL1,
      L1ToL2,
      Transactions,
      Tokens,
      DaBatches,
      DaBatchTransactions,
      TokenPriceHistory,
    ]),
    EigenlayerModule,
  ],
  controllers: [L1IngestionController],
  providers: [L1IngestionService],
  exports: [L1IngestionService],
})
export class L1IngestionModule {}
