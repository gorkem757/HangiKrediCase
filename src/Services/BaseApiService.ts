import axios, { AxiosInstance, AxiosResponse } from 'axios';

interface ApiResponse<T> {
  data: T;
  status: number;
}

class BaseApiService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'YOUR_API_BASE_URL',
      timeout: 5000, // set your desired timeout
    });

    // Add any default headers or interceptors here
    // this.axiosInstance.defaults.headers.common['Authorization'] = 'Bearer YOUR_ACCESS_TOKEN';
  }

  private handleResponse<T>(response: AxiosResponse): ApiResponse<T> {
    return {
      data: response.data,
      status: response.status,
    };
  }

  private handleError<T>(error: any): ApiResponse<T> {
    return {
      data: null as T,
      status: error.response ? error.response.status : 500,
    };
  }

  public async get<T>(url: string, params?: object): Promise<ApiResponse<T>> {
    try {
      const response = await this.axiosInstance.get<T>(url, { params });
      return this.handleResponse<T>(response);
    } catch (error) {
      return this.handleError<T>(error);
    }
  }

  public async post<T>(url: string, data?: object): Promise<ApiResponse<T>> {
    try {
      const response = await this.axiosInstance.post<T>(url, data);
      return this.handleResponse<T>(response);
    } catch (error) {
      return this.handleError<T>(error);
    }
  }
}

export default new BaseApiService();
