export const authService = {
  login: async (email: string, password: string) => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    sessionStorage.setItem('token', data.token);

    return data;
  },

  getToken: () => {
    return sessionStorage.getItem('token');
  },

  logout: () => {
    sessionStorage.removeItem('token');
  },
};
