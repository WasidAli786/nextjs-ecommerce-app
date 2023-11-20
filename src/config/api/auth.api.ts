import { LOGIN_ENDPOINT } from "../constant/endPoints";
import { post } from "../services/api.request";

const AuthService = {
  login: (data: any) => {
    return post(LOGIN_ENDPOINT, data);
  },
};
export default AuthService;
