import axios from "axios";

export const axios = () => {
  const API_KEY = "";
  const axios = axios
    .get("")
    .then((response) => {
      if (response) {
        const data = response.data;
      }
      if (!response) {
        alert("response data error");
      }
    })
    .catch((error) => {
      alert(error);
    });
};

export default axios;
