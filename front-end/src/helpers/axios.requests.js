import axios from 'axios';

const requestPost = async (URL, data) => {
  const response = await axios.post(URL, data);
  return response;
};

const axiosGetAll = async (URL) => {
  try {
    const res = await axios({
      method: 'get',
      url: URL,
    });

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export {
  requestPost,
  axiosGetAll,
};
