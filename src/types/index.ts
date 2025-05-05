export interface ProjectProps {
  index?: number;
  title: string;
  description: string;
  url?: string;
  repository?: string;
}

export interface BlogProps {
  index?: number;
  title: string;
  description: string;
}

export interface ReviewProps {
  index?: number;
  name: string;
  text: string;
  rating: number;
  country: string;
}
