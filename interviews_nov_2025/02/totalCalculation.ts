type LineItem = { sku: string; qty: number; price: number };
type Order = { id: string; customerId: string; items: LineItem[]; createdAt: string };

const orders: Order[] = [
  { id: 'A1', customerId: 'C1', items: [{ sku:'P1', qty:1, price:100 }, { sku:'P2', qty:2, price:50 }], createdAt:'2025-08-01T10:00:00Z' },
  { id: 'A1', customerId: 'C1', items: [{ sku:'P2', qty:1, price:50 }], createdAt:'2025-08-01T10:00:00Z' }, // duplicate order
  { id: 'A2', customerId: 'C2', items: [{ sku:'P3', qty:3, price:20 }], createdAt:'2025-08-03T08:05:00Z' }
];

type FinalObj = { id: string; total: number };

const finalObj: FinalObj[] = []; // 👈 Final output will be array of objects

for (let i = 0; i < orders.length; i++) {
  let items = orders[i].items;
  let id = orders[i].id;
  let data = 0;

  // calculate individual order total
  items.forEach(item => {
    data += item.qty * item.price;
  });

  // find index if this order id already exists
  const existingIndex = finalObj.findIndex(obj => obj.id === id);

  if (existingIndex !== -1) {
    // if exists → add to total (merge duplicates)
    finalObj[existingIndex].total += data;
  } else {
    // if NOT exists → push to array
    finalObj.push({ id, total: data });
  }
}

console.log(finalObj);



// const finalObj = orders.reduce((acc: FinalObj, order) => {
//   const total = order.items.reduce((sum, item) => sum + item.qty * item.price, 0);
//   acc[order.id] = (acc[order.id] || 0) + total;
//   return acc;
// }, {});
