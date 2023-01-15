import { ConfigModule, ConfigService } from '@nestjs/config';
import { IRMQServiceAsyncOptions } from 'nestjs-rmq';

export const getRMQConfig = (): IRMQServiceAsyncOptions => ({
  inject: [ConfigService],
  imports: [ConfigModule],
  useFactory: () => ({
    exchangeName: process.env.AMQP_EXCHANGE ?? '',
    connections: [
      {
        login: process.env.AMQP_USER ?? '',
        password: process.env.AMQP_PASSWORD ?? '',
        host: process.env.AMQP_HOST ?? '',
      },
    ],
    queueName: process.env.AMQP_QUEUE,
    prefetchCount: 32,
    serviceName: 'order-service',
  }),
});
