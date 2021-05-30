import { HttpClient } from "../httpClient/index";

class OrderService extends HttpClient {
    constructor() {
        super('http://localhost:4000');
    }

    getOrder() {
        return this.get('order');
    }
}

export const orderService = new OrderService();