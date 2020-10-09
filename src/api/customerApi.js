import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/customers/";

export function getCustomers() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveCustomer(customer) {
  console.log(customer);
  return fetch(baseUrl + (customer.id || ""), {
    method: customer.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(customer)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteCustomer(customerId) {
  return fetch(baseUrl + customerId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
