import { Body, Controller } from '@nestjs/common';
import { RMQRoute } from 'nestjs-rmq';
import {
  ChangeOrderDescription,
  ChangeOrderStatus,
  CreateOrder,
  DeleteOrder,
  GetUserOrders,
} from 'src/contracts';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @RMQRoute(GetUserOrders.topic)
  async getUserOrders(
    @Body() { user_id }: GetUserOrders.Request,
  ): Promise<GetUserOrders.Response> {
    return this.orderService.getUserOrders(user_id);
  }

  @RMQRoute(ChangeOrderDescription.topic)
  async changeOrderDescription(
    @Body() dto: ChangeOrderDescription.Request,
  ): Promise<ChangeOrderDescription.Response> {
    return this.orderService.changeOrderDescription(dto);
  }

  @RMQRoute(ChangeOrderStatus.topic)
  async changeOrderStatus(
    @Body() dto: ChangeOrderStatus.Request,
  ): Promise<ChangeOrderStatus.Response> {
    return this.orderService.changeOrderStatus(dto);
  }

  @RMQRoute(CreateOrder.topic)
  async createOrder(
    @Body() dto: CreateOrder.Request,
  ): Promise<CreateOrder.Response> {
    return this.orderService.createOrder(dto);
  }

  @RMQRoute(DeleteOrder.topic)
  async deleteOrder(
    @Body() { order_id }: DeleteOrder.Request,
  ): Promise<DeleteOrder.Response> {
    return this.orderService.deleteOrder(order_id);
  }
}
