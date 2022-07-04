import axios from "./index";

class AuthApi {
  // Login Endpoint
  static Login = (data) => {
    return axios.post(`users/login`, data);
  };

  // Registration Endpoint
  static Register = (data) => {
    return axios.post("users", data);
  };
}

export default AuthApi;
