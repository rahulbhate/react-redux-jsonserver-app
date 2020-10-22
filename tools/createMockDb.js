/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const mockData = require("./db.json");

const { customers, images, todos } = mockData;
const data = JSON.stringify({ customers, images, todos });
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function (err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
