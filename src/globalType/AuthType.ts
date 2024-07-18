
// login
export interface User {
  id: string;
  email: string;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface AuthState {
    user: User | null;
    loading: boolean;
    error: string | null;
  }
  
// register

export interface Credentials {
    email: string;
    password: string;
  }
  
  export interface UserType {
    email: string;
    password: string;
    passwordConfirm: string;
  }
  export interface AuthStateRegister {
    user: UserType | null;
    loading: boolean;
    error: string | null;
  }
  
