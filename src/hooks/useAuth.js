// useAuth.js
export const useAuth = () => {
    const isLogin = localStorage.getItem('token') !== null;
  
    const login = () => {
      // Perform login logic, set isLogin to true
      localStorage.setItem('token', 'your_token_here');
    };
  
    const logout = () => {
      // Perform logout logic, set isLogin to false
      localStorage.removeItem('token');
    };
  
    return { isLogin, login, logout };
  };
  