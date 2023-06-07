import { IPay } from "../../../interfaces/interfaces";
import Product from "./Product";

interface IClient {
    name: string,
    pay: IPay[]
}

class Client {
    public clients: IClient[] = []
    register(dice: IClient){
        const client = this.clients.find(client => client.name == dice.name)
        if(client){
            return client.pay.push(dice.pay[0]);
        } else{
            return this.clients.push(dice);
        }
    }
    calculateValue(valueClient: number, name: string){
        const valueCart = this.clients[1]?.pay.filter(client => client.name === name).length
        if(valueCart){
            return valueClient / valueCart
        } else{
            return valueClient;
        }
    }
}

export default new Client;