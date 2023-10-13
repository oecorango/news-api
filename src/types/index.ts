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

export type DataNews = {
  articles: [Article];
  status: string;
  totalResult: number;
};

export type DataSources = {
  sources: [Source];
  status: string;
};

export type Callback<T> = (data: T) => void;

export function setElement(elem: HTMLElement | Document, str: string): HTMLElement {
  const element = elem.querySelector(str) as HTMLElement;
  if (!element) {
    throw new Error('Ooops!');
  }
  return element;
}
