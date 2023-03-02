import axios from 'axios';

const requestPost = async (URL, data) => {
  const response = await axios.post(URL, data);
  return response;
};

export default requestPost;
