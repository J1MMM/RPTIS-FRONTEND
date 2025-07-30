import axios from "../services/axios";
import { BASE_URL } from "../utils/constant";

// Fetch function using REST API
export const fetchCancelsData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/assessor/fetchArchives`);
    console.log("cancels");
    console.log(response);

    return response.data?.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
