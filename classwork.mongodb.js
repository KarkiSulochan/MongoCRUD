use("mernDataBase");

// add foottball to hobbies array of sagar

// db.dosts.updateOne(
//   { name: "Sagar" },
//   {
//     $push: {
//       hobbies: "Football",
//     },
//   }
// );

// ? badminton and basketball to sagar hobbies'

// db.dosts.updateOne(
//   { name: "Sagar" },
//   {
//     $push: {
//       hobbies: { $each: ["Badmintion", "Basketball"] },
//     },
//   }
// );
// db.dosts.find();

// ? add swimming, cycling and cricket as sagar's hobbies

// db.dosts.updateOne(
//   { name: "Sagar" },
//   {
//     $addToSet: {
//       hobbies: { $each: ["Swimming", "Cycling", "Cricket"] },
//     },
//   }
// );
// db.dosts.find();

//? add swimming and cycling  as prakash's hobbies

// db.dosts.updateOne(
//   { name: "Prakash" },
//   {
//     $addToSet: {
//       hobbies: { $each: ["Swimming", "Cycling"] },
//     },
//   }
// );

// db.dosts.find();

//? add two subjects with points in Prakash's scores
// {
//     "sub": "Nepali"
//     "point": 65
// }
// {
//     "sub": "English",
//     "point": 60
// }

// db.dosts.updateOne(
//   { name: "Prakash" },
//   {
//     $push: {
//       scores: {
//         $each: [
//           {
//             sub: "Nepali",
//             point: 65,
//           },
//           {
//             sub: "English",
//             point: 60,
//           },
//         ],
//       },
//     },
//   }
// );

//? remove last item from sagar's hobbies
//? 1=> last, -1 => first

// db.dosts.updateOne(
//   { name: "Sagar" },
//   {
//     $pop: {
//       hobbies: 1,
//     },
//   }
// );

// conditionally remove garna pull
//? $pull
//? remove subject in which prakash has score less than 60

// db.dosts.updateOne(
//   { name: "Prakash" },
//   {
//     $pull: {
//       scores: { point: { $lt: 60 } },
//     },
//   }
// );
// db.dosts.find();

//multiple values remove garda pullALl

//? remove badmintion and swimming from sagar hobbies

// db.dosts.update(
//   { name: "Sagar" },
//   {
//     $pullAll: { hobbies: ["Basketball", "Swimming"] },
//   }
// );

// db.dosts.find();

//? update sagar science point to 63

// db.dosts.updateOne(
//   { name: "Sagar", "scores.sub": "Science" },
//   {
//     $set: {
//       "scores.$.point": 63,
//     },
//   }
// );
// db.dosts.find();

//?change subject "Social" to "Health" from sagar

// db.dosts.updateOne(
//   { name: "Sagar", "scores.sub": "Social" },
//   {
//     $set: {
//       "scores.$.sub": "Health",
//     },
//   }
// );

//? change health point of sagar document to 60

// db.dosts.updateOne(
//   { name: "Sagar", "scores.sub": "Health" },
//   {
//     $set: {
//       "scores.$.point": 60,
//     },
//   }
// );

// db.dosts.find();

//? change football to futsal from sagar hobbies

// db.dosts.updateOne(
//   { name: "Sagar", hobbies: "Football" },
//   {
//     $set: {
//       "hobbies.$": "Futsal",
//     },
//   }
// );

//? update prakash scores  80 to all subjects

// db.dosts.updateOne(
//   { name: "Prakash" },
//   {
//     $set: {
//       "scores.$[].point": 80,
//     },
//   }
// );

//? change all books to trekking for alish

// db.dosts.updateOne(
//   { name: "Alish" },
//   {
//     $set: {
//       "hobbies.$[]": "Trekking",
//     },
//   }
// );

// db.dosts.updateOne(
//   { name: "Sulochan" },
//   {
//     $set: {
//       "scores.$[item].point": 60,
//     },
//   },
//   {
//     arrayFilters: [{ "item.point": { $gt: 50 } }],
//   }
// );

// ? Update scores less than 55 by 10 marks for Sulochan
// db.dosts.updateOne(
//   { name: "Sulochan" },
//   {
//     $inc: {
//       "scores.$[item].point": 10,
//     },
//   },
//   { arrayFilters: [{ "item.point": { $lt: 55 } }] }
// );

// db.dosts.updateOne(
//   { name: "Sulochan" },
//   {
//     $push: {
//       scores: [
//         {
//           sub: "Political Science",
//           point: 50,
//         },
//         {
//           sub: "Science",
//           point: 63,
//         },
//         {
//           sub: "Health",
//           point: 60,
//         },
//       ],
//     },
//   }
// );
// db.dosts.find();

// db.dosts.find();
