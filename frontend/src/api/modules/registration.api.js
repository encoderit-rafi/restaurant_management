import { api } from "@/axios";

const RegistrationApi = {
  registrationUserApi(user_input) {
    return api.post("/users", user_input);
  },
};

export { RegistrationApi };
