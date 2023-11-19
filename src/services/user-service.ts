import create from "./http-service";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  company: Company;
  website: string;
}

interface Address {
  street: string;
  city: string;
}

interface Company {
  name: string;
  catchPhrase: string;
}

export default create("users");
