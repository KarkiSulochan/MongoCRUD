use("mernDataBase");

//insert

//insertOne

// db.product.insertOne({
//     name: "Apple iphone 15",
//     price: 145000,
//     quantity: 5
// });

// db.product.insertOne({
//     name: "Asus TUF",
//     price: 170000,
//     quantity: 2
// });

//insetMany

// db.product.insertMany([
//   {
//     name: "NVDIA GeForce",
//     price: 50000,
//     qunatity: 3,
//   },
//   {
//     name: "Nike AirForce 1",
//     price: 15000,
//     qunatity: 4,
//   },
//   {
//     name: "MacBook pro",
//     price: 180000,
//     quantity: 5,
//   },
//   {
//     name: "The Alchemist",
//     price: 50000,
//     quantity: 10,
//   },
// ]);

//? find

//findOne

// db.product.findOne({name: "Nike AirForce 1"});

//update
//updateOne, updateMany

// db.product.updateOne({name: "Apple iphone 15"},{
//     $set : {
//         price: 150000,
//         quantity: 5
//     }
// })

// db.product.updateOne({name: "Asus TUF"},{
//     $set : {
//         price: 150000,
//     }
// });

// db.product.updateMany({price: 150000},{
//     $set : {
//         quantity: 14
//     }
// });

//delete
//deleteOne, deleteMany

// db.product.deleteOne({name: "Asus TUF"});

// db.product.deleteOne({quantity: 5});

// db.product.deleteMany({});

// db.product.deleteOne({name: "Apple iphone 15"});

// db.product.deleteMany({price: 50000});

// db.product.find();
