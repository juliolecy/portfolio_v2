export interface Project {
  deploy: string;
  desc: string;
  git: string;
  id: number;
  img: string;
  tech: string | string[];
  title: string;
}

export type User = {
  id:number;
  name:string;
  email: string;
  passwordHash: string;
}

export type AuthContextType = {
  user: User | null;
  signin: (email:string, password: string) =>Promise<boolean>
  signout: ()=>void;


}