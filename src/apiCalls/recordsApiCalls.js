import axios from "axios";
//axios.defaults.withCredentials = true;
const getAllRecords = async (dispatchRecords) => {
  try {
    const response = await axios.get (`${process.env.REACT_APP_API}/records`);

    dispatchRecords({
      type: "FETCH_RECORDS_SUCCESS",
      payload: response.data.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export default getAllRecords;
