// use("mernDataBase");

//insert
//? insertOne
//? inserMany

//insertOne

// db.students.insertOne({
//     name: "Bhargav",
//     college: "NCIT",
//     address: {
//         temporary: "Dhangadi",
//         permanent: "Lokanthali",
//     },
// });

// db.students.insertOne({
//     name: "Sagar",
//     college: "Broadway Info",
//     address: {
//         temporary: "Lokanthali",
//         premanent: "kavre",
//     },
// });

//insert many

// db.courses.insertMany([
//   {
//     name: "MERN",
//     price: 25000,
//     duration: 90,
//   },
//   {
//     name: "Spring Boot",
//     price: 25000,
//     duration: 100,
//   },
//   {
//     name: "Devops",
//     price: 30000,
//     duration: 60,
//   },
// ]);

// ? Read
// ? findOne, find
//? find always returns array
//? no data, returns empty array

// db.students.find();

// db.courses.find();

//findOne => always returns one element based on condition

// db.courses.findOne({name: "Spring Boot"});

//? delete
//deleteOne, deleteMany

// db.courses.deleteOne({duration: 60});

// db.courses.deleteMany({});

//?update
//updateOne, uodateMany

// db.courses.updateOne(
//   { name: "MERN" },
//   {
//     $set: {
//       price: 20000,
//     },
//   }
// );

// db.courses.updateOne({name: "Spring Boot"},
// {
//     $set: {
//         price: 20000,
//         duration: 90
//     },
// });

// db.courses.updateMany({price: 20000}, {
//     $set: {
//         duration: 120
//     },
// });

// db.courses.find();
