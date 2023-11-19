import apiClient from "./api-client";
import { User } from "./user-service";

class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>() {
    const controller = new AbortController();
    const responsePromise = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });
    return { responsePromise, controller };
  }

  getOne<T>(id: number) {
    const controller = new AbortController();
    const responsePromise = apiClient.get<T>(this.endpoint + "/" + id, {
      signal: controller.signal,
    });
    return { responsePromise, controller };
  }

  delete<T>(id: number) {
    return apiClient.delete<T>(this.endpoint + "/" + id);
  }

  patch<T>(data: User) {
    return apiClient.patch<T>(this.endpoint + "/" + data.id, data);
  }
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;
