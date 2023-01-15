const statuses = ['accepted', 'inprogress', 'finished'] as const;
export type Statuses = typeof statuses[number];

export namespace ChangeOrderStatus {
  export const topic = 'order.changestatus.command';

  export class Request {
    order_id: number;
    status: Statuses;
  }

  export class Response {
    success: boolean;
  }
}
