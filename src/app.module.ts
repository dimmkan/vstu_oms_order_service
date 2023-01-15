import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RMQModule } from 'nestjs-rmq';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getRMQConfig } from './configs/rmq.config';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    RMQModule.forRootAsync(getRMQConfig()),
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
