import axios from "axios";

const URL_ROOT = "https://proyecto-5-backend-86l3.onrender.com/api/auth";

const loginService = async (form) => {
  const resp = await axios.post(`${URL_ROOT}/login`, form);
  return resp;
};

const registerService = async (form) => {
  const resp = await axios.post(`${URL_ROOT}/register`, form);
  return resp;
};

const renewTokenService = async () => {
  const resp = await axios.get(`${URL_ROOT}/renew`, {
    headers: {
      "x-token": localStorage.getItem("token"),
    },
  });
  return resp;
};

export { loginService, registerService, renewTokenService };
