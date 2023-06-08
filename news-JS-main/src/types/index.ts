export interface IResp {
  endpoint: string;
  options?: object | undefined;
}

export type Article = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: Source;
  title: string;
  url: string;
  urlToImage: string;
};

export type Source = {
  id: string;
  name: string;
  url?: string;
  language?: string;
  description?: string;
  country?: string;
  category?: string;
};
