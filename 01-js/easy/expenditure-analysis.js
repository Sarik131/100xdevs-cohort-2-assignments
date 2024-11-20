/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
     {
    id: 1,
    timestamp: 1656076800000,
    price: 200,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  //   const map = new Map();
  //   // const transactions = [
  //   //   {
  //   //     id: 1,
  //   //     timestamp: 1656076800000,
  //   //     price: 10,
  //   //     category: 'Food',
  //   //     itemName: 'Pizza',
  //   //   },
  //   // ];
  //   transactions.forEach(transaction => {
  //     if (map.has(transaction.category)) {
  //       map.set(transaction.category, map.get(transaction.category) + transaction.price)
  //     } else {
  //       map.set(transaction.category, transaction.price);
  //     }
  //   });
  //   console.log('map', map);
  //   const returnObj =[];
  //   map.forEach((value,key)=>{
  //     returnObj.push({category:key, totalSpent:value});
  //   })
  // console.log(returnObj);


  // const returnMap = map.entries()
  const results = []
  transactions.forEach(element => {
    const trans = results.find(result => result.category === element.category);
    if (trans) {
      trans.price = trans.price + element.price
    } else {
      results.push(element);
    }
  });
  console.log(results);

  return results.map((result) => ({ category: result.category, totalSpent: result.price }));
}
// calculateTotalSpentByCategory()
module.exports = calculateTotalSpentByCategory;
