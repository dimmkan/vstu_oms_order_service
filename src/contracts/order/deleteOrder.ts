export namespace DeleteOrder {
  export const topic = 'order.delete.command';

  export class Request {
    order_id: number;
  }

  export class Response {
    success: boolean;
  }
}
