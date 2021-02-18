const axios = require("axios");
var key = require('../keys')
const BASE_API = key.RANDM_API;

const getRequestById = async (id,url) => {
  try {
    const data = await axios.get(`${BASE_API}${url}${id}`);
    return data;
  } catch (err) {
    return err.toString()
  }
};


module.exports = {
  getRequestById,
};
