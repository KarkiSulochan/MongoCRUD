use("mernDataBase");

//? array update
//? $push, $pop, $pull, $pullAll, $addToSet

// db.friends.updateMany(
//   {
//     name: "Alish",
//   },
//   {
//     $push: {
//       hobbies: "Dancing",
//     },
//   }
// );

//? modifier => $each, $position, $sort, $slice

// db.friends.updateOne(
//   { _id: ObjectId("656070d2b16daaa31169a51a") },
//   {
//     $push: { hobbies: { $each: ["Singing", "Cardio"] } },
//   }
// );
// db.friends.find();

//add singing and driving in sulochan

// db.friends.updateOne(
//   { name: "Sulochan" },
//   {
//     $push: { hobbies: { $each: ["Singing", "Driving"] } },
//   }
// );

// db.friends.updateOne(
//   { name: "Sulochan" },
//   {
//     $push: { scores: { sub: "Math", point: 70 } },
//   }
// );

//addToSet => Adds element to an array if they do not already exist in the array
// db.friends.updateOne(
//   { name: "Sulochan" },
//   {
//     $addToSet: {
//       hobbies: { $each: ["Singing", "Driving", "Treking", "Hiking"] },
//     },
//   }
// );

//? POP
//? 1 => remove last element from array
//? -1 => remove first elment from array

// db.friends.updateOne({ name: "Sulochan" }, { $pop: { hobbies: -1 } });

// db.friends.updateOne({ name: "Sulochan" }, { $pop: { hobbies: 1 } });

//? pill
//? removes item from array based upon condition

// db.friends.updateOne(
//   { name: "Sulochan" },
//   {
//     $pull: {
//       scores: {
//         sub: "Social",
//       },
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Sulochan" },
//   {
//     $pull: {
//       scores: { sub: "Math", point: { gt: 60 } },
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Alish" },
//   {
//     $pull: {
//       hobbies: "Cardio",
//     },
//   }
// );

//? $pullAll

// db.friends.updateOne(
//   { name: "Sulochan" },
//   {
//     $pullAll: { hobbies: ["Dancing", "Singing"] },
//   }
// );

// db.friends.find();

// ===============================================================================

// db.friends.updateOne(
//   { name: "Sulochan", "scores.sub": "Math" },
//   {
//     $set: {
//       "scores.$.point": 50,
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Sulochan", hobbies: "Driving" },
//   {
//     $set: {
//       "hobbies.$": "Cycling",
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Sulochan", "scores.sub": "Math" },
//   {
//     $set: {
//       "scores.$.sub": "Physics",
//       "scores.$.point": 80,
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Prakash", "scores.sub": "Social" },
//   {
//     $inc: {
//       "scores.$.point": 10,
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Prakash" },
//   {
//     $set: {
//       "scores.$[].point": 50,
//     },
//   }
// );
// db.friends.find();
