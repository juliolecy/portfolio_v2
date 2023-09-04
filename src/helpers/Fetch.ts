import Cookies from 'js-cookie';

export default {
  getProjects: async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/projects`);
      //const response = await fetch(`http://localhost:4000/api/projects`);

      const data = await response.json();
      console.log('projects data', data);
      return data.projects;
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
    }
  },

  getProject: async (id: string) => {
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
      const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/project`, options);
      const data = await response.json();
      return data.project;
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
      return;
    }
  },
  editProject: async (formData: FormData) => {
    const jwtToken = Cookies.get('jwtToken');

    //   const bodyObject = {
    //   id, title, git, deploy, desc, tech
    // }

    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      // body: new Blob([JSON.stringify(bodyObject)], { type: 'application/json' })
      body: formData,
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/project/edit`, options);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
      return;
    }
  },
  addProject: async (formData: FormData) => {
    const jwtToken = Cookies.get('jwtToken');

    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      body: formData,
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/project/create`, options);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
      return;
    }
  },
};
