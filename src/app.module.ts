import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RMQModule } from 'nestjs-rmq';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getRMQConfig } from './configs/rmq.config';

@Module({
  imports: [ConfigModule.forRoot(), RMQModule.forRootAsync(getRMQConfig())],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
