import './news.css';
import { Article, setElement } from '../../../types';
import img from '../../../assets/img/news-placeholder.jpg';

class News {
  public static draw(data: Article[]): void {
    const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
    const fragment = document.createDocumentFragment();
    const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

    news.forEach((item: Article, idx: number) => {
      const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

      const newsTempItem = setElement(newsClone, '.news__item');
      if (idx % 2) newsTempItem.classList.add('alt');

      setElement(newsClone, '.news__meta-photo').style.backgroundImage = `url(${item.urlToImage || img})`;
      setElement(newsClone, '.news__meta-author').textContent = item.author || item.source.name;
      setElement(newsClone, '.news__description-title').textContent = item.publishedAt
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('-');
      setElement(newsClone, '.news__meta-date').textContent = item.title;
      setElement(newsClone, '.news__description-source').textContent = item.source.name;
      setElement(newsClone, '.news__description-content').textContent = item.description;
      setElement(newsClone, '.news__read-more a').setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    setElement(document, '.news').innerHTML = '';
    setElement(document, '.news').appendChild(fragment);
  }
}

export default News;
