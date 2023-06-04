import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
  AxiosError,
} from 'axios';

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders;
}
// Axios 인스턴스 생성
const instance: AxiosInstance = axios.create({
  baseURL: process.env.BACK_API,
  timeout: 5000,
});

// 요청 인터셉터 설정
instance.interceptors.request.use(
  (config: AdaptAxiosRequestConfig) => {
    //헤더 설정, 토큰 추가
    return config;
  },
  (error: AxiosError) => {
    // 요청 에러 처리
    return Promise.reject(error);
  }
);

// 응답 인터셉터 설정
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 응답 데이터 가공
    return response;
  },
  (error: AxiosError) => {
    // 응답 에러 처리
    return Promise.reject(error);
  }
);

export default instance;
