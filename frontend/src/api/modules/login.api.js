import { api } from "@/axios";

const LoginApi = {
  loginUserApi(user_input) {
    return api.get(
      `http://localhost:3000/users?email=${user_input.email}&password=${user_input.password}`
    );
  },
};

export { LoginApi };
