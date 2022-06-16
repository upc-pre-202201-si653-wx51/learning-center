// user.service.js

// User Data Service

import authHeader from "./auth.header";
import axios from "axios";

const API_URL = 'https://localhost:7070/api/v1/users';

export default class UserService {
  getAll() {
    return axios.get(API_URL, { headers: authHeader() });
  }
}
