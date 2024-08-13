
export interface CreateContactParams {
    fullname: string;
    email: string;
    message: string;
  }

export interface ResponseContact {
  status: string;
  message: string;
  data: {
    fullname: string;
    email: string;
    message: string;
  };
}
