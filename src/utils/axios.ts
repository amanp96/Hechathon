import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {constants} from '../theme/constants';

const instance = axios.create({
  baseURL: 'http://52.90.114.34:3000/',
});
instance.interceptors.request.use(
  async config => {
    // const token = await AsyncStorage.getItem(constants.AUTH_TOKEN);
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lciI6eyJfaWQiOiI2NWM3MWE4MzRmM2NkYjAyZWY1ZjZjOGQiLCJlbWFpbCI6ImNoZXRhbm1hbHZpeWE5MjRAZ21haWwuY29tIiwibmFtZSI6InRlc3QifSwiaWF0IjoxNzA3NTQ3ODMxLCJleHAiOjE3MDc5Nzk4MzF9.UyM_JEyACIhUi2TsZIk_qkWpNQ66kPC-nTk1aFXouTM';

    if (token) {
      config.headers.authorization = token;
    }
    console.log(config);
    // config.headers['Content-Type'] = 'application/json';

    return config;
  },
  error => {
    return error;
  },
);
instance.interceptors.response.use(
  response => {
    console.log(response, 'jhbkn');
    return response;
  },
  error => {
    return error;
  },
);

export {instance as axios};
