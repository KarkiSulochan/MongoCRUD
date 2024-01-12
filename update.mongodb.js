use("mernDataBase");

//? update
//?  update document

// db.friends.find();

// db.friends.updateOne(
//   {
//     name: "Unique",
//   },
//   {
//     $set: {
//       name: "Sulochan",
//     },
//   }
// );

// db.friends.updateOne(
//   {
//     age: 60,
//   },
//   {
//     $set: {
//       age: 24,
//     },
//   }
// );
// db.friends.find();

//$inc
// used to increase or decrease value

// db.friends.updateMany(
//   {},
//   {
//     $inc: {
//       age: 10,
//     },
//   }
// );

// db.friends.updateMany(
//   {},
//   {
//     $inc: {
//       age: -10,
//     },
//   }
// );
// db.friends.find();

//$mul
// db.friends.updateOne(
//   { name: "Prakash" },
//   {
//     $mul: {
//       age: 3,
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Prakash" },
//   {
//     $mul: {
//       age: 0.5,
//     },
//   }
// );

//$rename => rename fields
// db.friends.updateMany(
//   {},
//   {
//     $rename: {
//       age: "totalAge",
//     },
//   }
// );

// db.friends.updateMany(
//   {},
//   {
//     $set: {
//       country: "Nepal",
//     },
//   }
// );

// db.friends.updateMany(
//   {},
//   {
//     $unset: {
//       country: "",
//     },
//   }
// );

// db.friends.find();
