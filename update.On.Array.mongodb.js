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
