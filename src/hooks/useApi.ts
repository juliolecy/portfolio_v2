import Cookies from 'js-cookie';

export const useApi = () => ({
  getCourses: async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/courses`);

      const data = await res.json();
      if (data) {
        console.log(data);
        return data.courses;
      }
    } catch (error) {
      console.error('Erro ao fazer a requisição', error);
    }
  },
  getCourse: async (id: string) => {
    let newId = parseInt(id);
    const bodyObject = {
      id: newId,
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: new Blob([JSON.stringify(bodyObject)], { type: 'application/json' }),
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/course`, options);
      const data = await response.json();
      console.log('course', data);
      return data.course;
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
      return;
    }
  },
  validadeToken: async () => {
    const jwtToken = Cookies.get('jwtToken');
    const bodyObject = {
      token: jwtToken,
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/validatetoken`, {
        method: 'POST',
        body: new Blob([JSON.stringify(bodyObject)], { type: 'application/json' }),
      });

      const data = await res.json();

      if (data && data.user) {
        return data.user;
      }
    } catch (error) {
      console.error('Erro ao fazer a requisição', error);
    }
  },

  signin: async (email: string, password: string) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const json = await res.json();
      if (json.sucess) {
        Cookies.set('jwtToken', json.token, { expires: 1, path: '/' });
      }

      return json;
    } catch (error) {
      console.error('Erro ao fazer a requisição', error);
    }
  },
  logout: async () => {},
});
