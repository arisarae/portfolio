export interface techType {
  id: number;
  image: string;
  title: string;
  detail: string;
}

export interface contactType {
  id: number;
  image: string;
  title: string;
  detail: string;
  link: string;
}

export interface projectsType {
  id: number;
  image: string;
  title: string;
  tech: string[];
  links: {
    name: string;
    url: string
  };
  date: string;
  desc: string;
}