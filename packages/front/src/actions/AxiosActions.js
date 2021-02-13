import axios from "axios";
import BASE_URL from "../utils/constants.js";

const AxiosActions = {
  createDraw : async (data) => {
    const solicitation = await axios.post(`${BASE_URL}/groups`, data);
    const response = await solicitation.json();
  
    return response;
  },

  getGroup : (id) => {
    return axios.get(`${BASE_URL}/people/${id}`)
  }
};

export default AxiosActions;