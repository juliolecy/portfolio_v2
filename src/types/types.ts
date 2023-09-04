export interface Project {
  deploy: string;
  desc: string;
  git: string;
  id: number;
  img: string;
  tech: string[];
  title: string;
}

export type User = {
  id: number;
  name: string;
  email: string;
  passwordHash: string;
};

export type AuthContextType = {
  user: User | null;
  signin: (email: string, password: string) => Promise<boolean>;
  signout: () => void;
};

export interface CourseType {
  certificate: string;
  created_by: string;
  id: number;
  status: boolean;
  svg: string;
  title: string;
  topics: string;
  total_hours: number;
}
