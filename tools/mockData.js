const customers = [
  {
    "id": 10,
    "firstName": "Cory",
    "lastName": "House",
    "birthDate": "29-03-1986",
    "createdAt": 1598778507721
  },
  {
    "id": 11,
    "firstName": "Rashmi",
    "lastName": "Basnet",
    "birthDate": "2020-10-09",
    "createdAt": 1602212313220
  },
  {
    "id": 12,
    "firstName": "Tony",
    "lastName": "Hanberry",
    "birthDate": "2020-08-12",
    "createdAt": 1602215645341
  }
];

const newCustomer = {
  id: null,
  firstName: "",
  lastName: "",
  birthDate:"",
};
// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCustomer,
  customers,
};
