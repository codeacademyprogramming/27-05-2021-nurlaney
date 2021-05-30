import { HttpClient } from "../httpClient/index";

class OrderService extends HttpClient {
    constructor() {
        super('http://localhost:4000');
    }

    getOrder() {
        return this.get('order');
    }

    addOrder(data) {
        return this.post('order', data);
    }
}

export const orderService = new OrderService();