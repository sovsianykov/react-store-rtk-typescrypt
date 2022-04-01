import axios, { AxiosResponse } from "axios";

class HttpRequest {
  instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 2000,
  });

  public async getProducts(): Promise<AxiosResponse> {
    return await this.instance.get("products");
  }
  public async getProduct(id:number): Promise<AxiosResponse> {
    return await this.instance.get(`products/${id}`);
  }
}

export default new HttpRequest();
