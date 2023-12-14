export interface Product{
    name: string;
    price: number;
}

const products: Product[] = [
    {name: 'Watermelon', price: 10.00},
    {name: 'Pickles', price: 8.00},
    {name: 'Ice Cream', price: 6.00},
];

export function calcAverageProductPrice(products: Product[]): number{
    if(products.length === 0){
        return 0;
    }

    let average: number = 0;

    for (let product of products){
        average += product.price;
    }

    return average / products.length;
}

const result: number = calcAverageProductPrice(products);

console.log(result);