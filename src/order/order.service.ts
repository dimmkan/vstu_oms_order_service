import { Directus } from '@directus/sdk';
import { Injectable } from '@nestjs/common';
import {
  ChangeOrderDescription,
  ChangeOrderStatus,
  CreateOrder,
  DeleteOrder,
  GetUserOrders,
} from 'src/contracts';

@Injectable()
export class OrderService {
  directus: any;
  constructor() {
    this.directus = new Directus(process.env.DIRECTUS_HOST, {
      auth: {
        staticToken: process.env.ADMIN_API_KEY,
      },
    });
  }

  getUserOrders(user_id: number): Promise<GetUserOrders.Response> {
    const order_collection = this.directus.items('orders');
    return order_collection.readByQuery({
      filter: {
        user_id,
      },
    });
  }
  deleteOrder(order_id: number): Promise<DeleteOrder.Response> {
    throw new Error('Method not implemented.');
  }
  createOrder(dto: CreateOrder.Request): Promise<CreateOrder.Response> {
    throw new Error('Method not implemented.');
  }
  changeOrderStatus(
    dto: ChangeOrderStatus.Request,
  ): Promise<ChangeOrderStatus.Response> {
    throw new Error('Method not implemented.');
  }
  changeOrderDescription(
    dto: ChangeOrderDescription.Request,
  ): Promise<ChangeOrderDescription.Response> {
    throw new Error('Method not implemented.');
  }
}
