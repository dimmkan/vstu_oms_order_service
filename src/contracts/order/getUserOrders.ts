export type OrdersList = {
  id: number;
  date_created: number | null;
  date_updated: number | null;
  user_id: number;
  employee_id: number | null;
  theme: string;
  description: string;
  status: string;
};

export namespace GetUserOrders {
  export const topic = 'order.getbyuser.query';

  export class Request {
    user_id: number;
  }

  export class Response {
    data: OrdersList[];
  }
}
