import Cookies from 'js-cookie';

export const useApi = () => ({
    validadeToken: async()=>{
      const jwtToken = Cookies.get('jwtToken');
      const bodyObject = {
        token: jwtToken
      }

      try {
        const res = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/validatetoken`, {
          method: 'POST',
            body:  new Blob([JSON.stringify(bodyObject)], { type: 'application/json' })
          })
            
            const data = await res.json()

            if(data && data.user){
              return data.user;
            }
          } catch (error) {
        console.error('Erro ao fazer a requisição', error);
      }
    },

    signin: async(email:string, password: string)=>{
        try {
            const res = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/login`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({email, password})
            });
            const json = await res.json()
          if(json.sucess){
            Cookies.set('jwtToken', json.token, { expires: 1, path: '/' });
          }
            
          return json
        } catch (error) {
            console.error('Erro ao fazer a requisição', error);
          }
      
        
    },
    logout: async()=>{

    }
})