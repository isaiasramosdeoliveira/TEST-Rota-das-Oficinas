import Client from "../models/Client";
import Product from "../models/Product";

function verify() {
    const res: object[] = []
    for (let i = 0; i < Product.products.length; i++) {
        Client.clients.forEach((valueClient, indexClient) => {
            valueClient.pay.forEach((valuePay, indexPay) => {
                res.push(valueClient.pay.filter(client => client.product.name === Product.products[i].name))
                
            })
        })
    }
    console.log(res);
    return
}

export default verify;