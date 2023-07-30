import axios from "axios";

const URL_ROOT = `https://proyecto-5-backend-86l3.onrender.com/api/products`;

const getProductsService = async () => {
  const response = await axios.get(`${URL_ROOT}`);
  return response;
};

const getProductService = async (id) => {
  const response = await axios.get(`${URL_ROOT}/${id}`);
  return response;
};

export { getProductsService, getProductService };
