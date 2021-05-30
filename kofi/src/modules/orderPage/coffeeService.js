import { HttpClient } from "../httpClient/index";

class CoffeeService extends HttpClient {
    constructor() {
        super('http://localhost:4000');
    }

    getCoffee() {
        return this.get('coffee');
    }
}

export const coffeeService = new CoffeeService();