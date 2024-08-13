export interface Section {
  id: number;
  name: string;
}

export interface GetSectionResponse {
  status: 'ok' | 'error';
  message: string;
  data: Section[];
}
