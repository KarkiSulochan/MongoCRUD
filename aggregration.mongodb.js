use("mernDataBase");

// aggregation
//? powerful query tool
//? uses pipeline
//? popular stages are
//? $match, $sort, $limit, $skip, $project, $lookup, $group

//? $match stage => filter
// db.movies.aggregate([
//   { $match: { name: "Under the Dome" } },
//   {
//     $project: {
//       name: 1,
//       genres: 1,
//       rating: 1,
//     },
//   },
// ]);

//-1 descending and 1 ascending
//? $sort use for sorting

// db.movies.aggregate([
//   { $match: {} },

//   {
//     $sort: {
//       "rating.average": -1,
//     },
//   },

//   {
//     $project: {
//       name: 1,
//       //   rating: 1,
//       movieRating: "$rating.average", //to change the field name
//     },
//   },
// ]);

//? hiearacy => small to big(numbers, capital letter, small letter)

// db.movies.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $project: {
//       movieName: { $toLower: "$name" },
//     },
//   },
//   {
//     $sort: {
//       movieName: 1,
//     },
//   },
// ]);
