import axios from "axios";

const baseUrlApi = "http://localhost:4000"

export const apiAuth = axios.create({
  baseURL: `${baseUrlApi}/auth`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiUser = axios.create ({
    baseURL: `${baseUrlApi}/user`,
    headers: {
        "Content-Type" : "application/json"
    }
})

export const apiBarber = axios.create ({
  baseURL: `${baseUrlApi}/barber`,
  headers: {
    "Content-Type": "applicacion/json"
  }
})