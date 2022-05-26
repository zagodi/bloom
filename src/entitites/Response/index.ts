import { AxiosError } from 'axios';

type RawError = {
  errors: string;
  results: unknown;
  status: string;
};

export type RequestError = AxiosError<RawError>;

type DefaultResponse<Data> = {
  data: Data;
};

export type RawResponse<Data> = DefaultResponse<Data>;
