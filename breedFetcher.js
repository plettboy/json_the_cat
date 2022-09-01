const request = require("request");
const breedName = process.argv[2]; //[0],[1] reserved for terminal building
// import fetch from "node-fetch";
// const fetch = require("fetch");

// fetch(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`)
//   .then((res) => {
//     console.log("resolved", res);
//     return res.json();
//   })
//   // .then((data) => {
//   // //   console.log(data);
//   // })
//   .catch((err) => {
//     console.log("rejected", err);
//   });

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
  (error, response, body) => {
    // console.log("error: ", error);
    // console.log(response && response.statusCode);
    // console.log(body);

    console.log(typeof body);
    const data = JSON.parse(body);
    console.log(data[0].description);
    console.log(typeof data);
  }
);
