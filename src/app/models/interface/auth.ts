export interface User {

}

export interface Auth {
  token: string;
  user: User;
}

export interface LoginData {
  email: string;
  password: string;
}