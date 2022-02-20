import axios, { AxiosResponse } from "axios";

class HttpRequest {
  instance = axios.create({
    baseURL: "http://localhost:3000/",
    timeout: 15000,
  });

  public async getProducts(): Promise<AxiosResponse> {
    return await this.instance.get("products");
  }
}

export default new HttpRequest();
