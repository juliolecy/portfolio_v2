//Definindo a tipagem dos temas para o Styled-Components
//Não esquecer de configurar o tsconfig files
import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      textSecondary: string;
      textLogin: string;
    };
  }
}
