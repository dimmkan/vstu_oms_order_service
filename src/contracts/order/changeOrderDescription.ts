export namespace ChangeOrderDescription {
  export const topic = 'order.changedescription.command';

  export class Request {
    order_id: number;

    description: string;
  }

  export class Response {
    success: boolean;
  }
}
