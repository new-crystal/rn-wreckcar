import instance from '../config/axiosInterseptor';
import { GET_USER_API, POST_SIGN_IN_API } from './api';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const GET_USER = async () => {
  try {
    const response = await instance.get(GET_USER_API);
    return response.data.data;
  } catch (error) {
    throw new Error(`GET_USER: ${error} Error line: 7`);
  }
};

export const SIGN_IN = async (data: object) => {
  try {
    const response = await instance.post(POST_SIGN_IN_API, data);
    const isSuccess = response.data.result.success;
    const token = response.data.token;
    if (isSuccess === true) {
      cookies.set('refresh_token', token, {
        path: '/',
        secure: true,
        sameSite: 'none',
      });
    } else {
      console.error('[SIGN_IN] Object Empty');
    }
    return response;
  } catch (error) {
    throw new Error(`SIGN_IN: ${error} `);
  }
};
