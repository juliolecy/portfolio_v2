export default {
    getProjects: async () => {
        try {
          const response = await fetch('https://portfolio-v2-backend-rcw0.onrender.com/api/projects');
          const data = await response.json();
          return data.projects
        
        } catch (error) {
          console.error('Erro ao buscar dados da API:', error);
        }
      },

    }