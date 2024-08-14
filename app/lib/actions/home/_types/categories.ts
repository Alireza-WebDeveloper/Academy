export interface CategoryState {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
}

export interface GetCategoryResponse {
  status: 'ok' | 'error';
  message: string;
  data: CategoryState[];
}
