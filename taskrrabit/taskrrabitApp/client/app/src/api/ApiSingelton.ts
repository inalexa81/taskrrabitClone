import axios, { AxiosInstance } from "axios";

class ApiSingleton {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:5174",
    });
  }

  createUser(data: any) {
    return this.instance.request({
      url: "/API/users",
      method: "POST",
      data: data,
    });
  }

  logiInUser(email: string, password: string) {
    return this.instance.request({
      url: "/API/users/login",
      method: "POST",
      data: { email, password },
    });
  }

  getCategory(data: any[] = []) {
    return this.instance.request({
      url: "/API/actions/get-categories",
      method: "GET",
      data: data,
    });
  }

  getAction(data: any[] = []) {
    return this.instance.request({
      url: "/API/actions/get-actions",
      method: "GET",
      data: data,
    });
  }

  createTasker(data: any) {
    return this.instance.request({
      url: "/API/taskers/register-tasker",
      method: "POST",
      data: data,
    });
  }

  logiInTasker(taskerEmail:string, taskerPassword:string ) {
    return this.instance.request({
      url: "/API/taskers/login-tasker",
      method: "POST",
      data:  { taskerEmail, taskerPassword },
    });
  }

  bringTaskersByCategory(taskerCategory: string  ) {
    return this.instance.request({
      url: "/API/taskers/get-taskers-by-category?taskerCategory=${taskerCategory}",
      method: "GET",

    });
  }
}

const API = new ApiSingleton();
export default API;
