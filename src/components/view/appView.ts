import News from './news/news';
import Sources from './sources/sources';
import { DataNews, DataSources } from '../../types';

export class AppView {
  public news: News;

  public sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  public static drawNews(data: DataNews): void {
    const values = data?.articles ? data?.articles : [];
    News.draw(values);
  }

  public static drawSources(data: DataSources): void {
    const values = data?.sources ? data?.sources : [];
    Sources.draw(values);
  }
}

export default AppView;
