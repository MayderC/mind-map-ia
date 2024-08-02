import http from './http';


export const login = async (email: string, password: string) => {
  try{
    const response = await http.post('/auth/login', {
      email,
      password,
    });
    return { data: response.data, ok: true };
  }catch(e){
    return { data: 'Authentication failed', ok: false };
  }
}

export const logout = async () => {
  try{
    const response = await http.post('/auth/logout');
    return { data: response.data, ok: true };
  }catch(e){
    return { data: 'Logout failed', ok: false };
  }
}

export const register = async (email: string, password: string, username: string) => {
  try{
    const response = await http.post('/auth/register', {
      email,
      password,
      username
    });
    return { data: response.data, ok: true };
  }catch(e){
    return { data: 'Registration failed', ok: false };
  }
}
