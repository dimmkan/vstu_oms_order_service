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
      sort: ['-date_created'],
    });
  }

  async deleteOrder(order_id: number): Promise<DeleteOrder.Response> {
    const order_collection = this.directus.items('orders');
    await order_collection.deleteOne(order_id);
    return { success: true };
  }

  async createOrder(dto: CreateOrder.Request): Promise<CreateOrder.Response> {
    const order_collection = this.directus.items('orders');
    await order_collection.createOne(dto);
    return { success: true };
  }

  async changeOrderStatus(
    dto: ChangeOrderStatus.Request,
  ): Promise<ChangeOrderStatus.Response> {
    const order_collection = this.directus.items('orders');
    await order_collection.updateOne(dto.order_id, { status: dto.status });
    return { success: true };
  }

  async changeOrderDescription(
    dto: ChangeOrderDescription.Request,
  ): Promise<ChangeOrderDescription.Response> {
    const order_collection = this.directus.items('orders');
    await order_collection.updateOne(dto.order_id, {
      description: dto.description,
    });
    return { success: true };
  }
}
