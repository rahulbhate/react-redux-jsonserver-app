import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/images/";

export function getImages() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}