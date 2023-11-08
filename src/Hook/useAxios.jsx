import axios from "axios";

const instance = axios.create({
  baseURL: `https://assignment11-theta.vercel.app`,
  withCredentials: true,
});

const useAxios = () => {
  return instance;
};

export default useAxios;
