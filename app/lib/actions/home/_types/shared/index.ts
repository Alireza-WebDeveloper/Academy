export interface Tag {
  id: number;
  name: string;
}

export interface Section {
  id: number;
  name: string;
}

export interface Post {
  id: number;
  title: string;
  imgUrl: string;
  abstract: string;
  views: number;
  liked: boolean;
  section: Section;
  tags: Tag[];
}

export interface Response {
  status: 'ok' | 'error';
  message: string;
  data: Post[];
}
