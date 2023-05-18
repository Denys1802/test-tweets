import axios from 'axios';

axios.defaults.baseURL = 'https://645005f1ba9f39c6ab727179.mockapi.io';

async function getTweets() {
  try {
    const { data } = await axios.get('/users');
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function putTweets(id, tweets) {
  try {
    const { data } = await axios.put(`/users/${id}`, tweets);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export { getTweets, putTweets };
