import { axiosRequest } from '../../utils/request';
import { CreateContactParams, ResponseContact } from './_types/contact';

export const createContact = async (data: CreateContactParams) => {
  const response = await axiosRequest.post<ResponseContact>('/contact', data);
  return response.data;
};
