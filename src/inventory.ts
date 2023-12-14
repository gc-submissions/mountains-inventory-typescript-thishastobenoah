import { Product } from './products';

interface InventoryItem{
    product: Product;
    quantity: number;
}

const inventory: InventoryItem[] = [
    { product: { name: 'motor', price: 10.00 }, quantity: 10 },
    { product: { name: 'sensor', price: 12.50 }, quantity: 4 },
    { product: { name: 'LED', price: 1.00 }, quantity: 20 },
  ];
  

export function calcInventoryValue(inventory: InventoryItem[]): number {
    if (inventory.length === 0) {
      return 0;
    }
  
    return inventory.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }


  const result = calcInventoryValue(inventory);


  console.log(result);