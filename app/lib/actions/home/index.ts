'use server';

// !! Types
import { GetCategoryResponse } from './_types/categories';
import { CreateContactParams, ResponseContact } from './_types/contact';
import { UpdateLikePostParams } from './_types/like-post';
import { GetPopularParams } from './_types/popular';
import { GetBySearchQueryParams } from './_types/search';
import { GetSectionResponse } from './_types/section';

// !! Import Utils
import { createParams } from '../../utils/create-params';
import { axiosRequest } from '../../utils/request';

// !! Share Types
import { Post, Response } from './_types/shared';

// Server Actions
import { revalidatePath } from 'next/cache';

// !! Get
export const getCategories = async () => {
  const response = await axiosRequest.get<GetCategoryResponse>('/categories');
  return response.data;
};

export const getSections = async () => {
  const response = await axiosRequest.get<GetSectionResponse>('/sections');
  return response.data;
};

export const getPopulars = async ({ sectionId }: GetPopularParams) => {
  const queryStringified = createParams({ sectionId });
  const response = await axiosRequest.get<Response>(
    `/popular?${queryStringified}`
  );
  return response.data;
};

export const getLatest = async () => {
  const response = await axiosRequest.get<Response>('/latest');
  return response.data;
};

export const getBySearchQuery = async ({ query }: GetBySearchQueryParams) => {
  // const queryStringified = createParams({ q: query });
  const response = await axiosRequest.get<Response>(`/search?q=${query}`);
  return response.data;
};

export const updateLikePost = async ({ id }: UpdateLikePostParams) => {
  const response = await axiosRequest.put<Post>(`/post/${id}/like`);
  revalidatePath('/');
  return response.data;
};
