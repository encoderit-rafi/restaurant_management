import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:3000",
});

const api = {
  async get(url) {
    try {
      const response = await Axios.get(url);
      return [false, response];
    } catch (error) {
      return [error, false];
    }
  },
  async post(url, data) {
    try {
      const response = await Axios.post(url, data);
      return [false, response];
    } catch (error) {
      return [error, false];
    }
  },
  async put(url, data) {
    try {
      const response = await Axios.put(url, data);
      return [false, response];
    } catch (error) {
      return [error, false];
    }
  },
  async delete(url) {
    try {
      const response = await Axios.delete(url);
      return [false, response];
    } catch (error) {
      return [error, false];
    }
  },
};

export { Axios, api };
