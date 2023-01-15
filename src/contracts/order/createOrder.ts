export namespace CreateOrder {
  export const topic = 'order.create.command';

  export class Request {
    user_id: number;
    theme: string;
    description: string;
  }

  export class Response {
    success: boolean;
  }
}
