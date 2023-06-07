export interface IResp {
  endpoint: string;
  options?: object | undefined;
}

type Options =
  | {
      id?: string;
      name?: string;
      description?: string;
      url?: string;
      category?: string;
      language?: string;
      country?: string;
    }
  | undefined;
