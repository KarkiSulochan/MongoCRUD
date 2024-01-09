// closer look to read operations

use("mernDataBase");

//comparision operators

//name === "under the dome"
// $eq

// db.movies.find({ name: { $eq: "Under the Dome" } });

//? find the name of movie BITTEN

// db.movies.find({ name: { $eq: "Bitten" } });

// db.movies.find({name: "Bitten"});

// db.movies.find({name: "Person of Interest"});

//? $gt => greater than

// db.movies.find({ runtime: { $gt: 60 } }).count();

// db.movies.find({ runtime: { $gt: 60 } });

//gte => greater than equals to

// db.movies.find({ runtime: { $gte: 60 } });

//? lt => less than

// db.movies.find({ weight: { $lt: 75 } });

//? lte => less than equals to

// db.movies.find({ weight: { $lte: 75 } });

//? $not
//status !== "Ended"

// db.movies.find({ status: { $not: { $eq: "Ended" } } });

// db.movies.find({ status: { $ne: "Ended" } });

//============================================================================
//? logical operator

//? $and, $or, $not, $nor

//status === "Ended" && runtime === 60

// db.movies.find({
//   $and: [{ status: "Ended" }, { runtime: 60 }, { "rating.average": 8.3 }],
// });

//? find movies whose rating is greater than or equal to 9

// db.movies.find(
//   { "rating.average": { $gte: 9 } },
//   { name: 1, rating: 1, _id: 0 }
// );

//? $or
//find movie which runtime is less than 60 or status is ended
// db.movies.find(
//   { $or: [{ runtime: { $lt: 60 } }, { status: "Ended" }] },
//   { name: 1, status: 1, runtime: 1 }
// );

//? $nor

//find movie whose status is neither ended or runtime is 60

// db.movies.find(
//   { $nor: [{ status: "Ended" }, { runtime: 60 }] },
//   { name: 1, status: 1, runtime: 1 }
// );
