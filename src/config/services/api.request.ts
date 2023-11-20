import Axios from "./axios.service";

export const errorHandler = (error: any) => {
  if (error?.status) {
    // The request was made and the server responded with a status code

    switch (error.status) {
      case 302:
        return error.data;
      case 400:
        // Unauthorized
        return error.data;
      case 422:
        // Unprocessable Entity
        return error.data.data.message;
      case 404:
        // Not Found
        break;
      case 500:
        // Internal Server Error
        break;
      default:
        break;
    }

    return error.data;
  } else if (error?.request) {
    // The request was made but no response was received

    return [error?.message];
  } else {
    // Something happened in setting up the request that triggered an Error
    return ["Something went wrong"];
  }
};

// get request
export const get = async (url: string) => {
  try {
    const response = await Axios.get(url);
    return response.data;
  } catch (error) {
    throw errorHandler(error);
  }
};

// post request
export const post = async (url: string, data: any) => {
  try {
    const response = await Axios.post(url, data);
    return response.data;
  } catch (error) {
    throw errorHandler(error);
  }
};

// put request
export const put = async (url: string, data: any) => {
  try {
    const response = await Axios.put(url, data);
    return response.data;
  } catch (error) {
    throw errorHandler(error);
  }
};

// delete request
export const del = async (url: string) => {
  try {
    const response = await Axios.delete(url);
    return response.data;
  } catch (error) {
    throw errorHandler(error);
  }
};