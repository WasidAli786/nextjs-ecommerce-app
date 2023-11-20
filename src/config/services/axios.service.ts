import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import cookieUtils from "@/utils/cookieUtils";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const AxiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json, text/plain, */*",
  },
});

const onRequest = (config: AxiosRequestConfig) => {
  const token = cookieUtils.getCookie("token");
  if (token) {
    config!.headers!.Authorization = token ? `Bearer ${token}` : "";
  }

  return config;
};

const onRequestError = (error: AxiosError) => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse) => {
  return response;
};

const onResponseError = (error: AxiosError) => {
  const statusCode = error?.response?.status;

  if (statusCode === 401) {
    cookieUtils.removeCookie("token");
    setTimeout(() => {
      window.location.href = "/login";
    }, 500);
  }
  return Promise.reject(error);
};

AxiosInstance.interceptors.request.use(onRequest, onRequestError);
AxiosInstance.interceptors.response.use(onResponse, onResponseError);

export default AxiosInstance;
