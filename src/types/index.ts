export interface BaseApiResponse<T> {
  parameters: {
    data: T;
  };
  status: {
    code: string;
    description: string;
  };
}
