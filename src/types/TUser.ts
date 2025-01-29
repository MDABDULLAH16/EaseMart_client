export interface TUser {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  role: "admin" | "user";
  address: string;
}
