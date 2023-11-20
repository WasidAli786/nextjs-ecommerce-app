export const useLocalStorage = () => {
  const setStorageItem = (key: string, value: any) => {
    try {
      if (typeof window !== "undefined" && key && value) {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.log(error, "Error while setting the value in the storage");
    }
  };

  const getStorageItem = (key: string) => {
    try {
      if (typeof window !== "undefined" && key) {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : undefined;
      }
    } catch (error) {
      console.log(error, "Error while getting the value in the storage");
    }
  };

  const removeStorageItem = (key: string) => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.log(error, "Error while removing the value in the storage");
    }
  };

  return {
    setStorageItem,
    getStorageItem,
    removeStorageItem,
  };
};
