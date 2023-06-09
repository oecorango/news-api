import './news.css';
import { Article } from '../../../types';

class News {
  public static draw(data: Article[]): void {
    const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
    const fragment = document.createDocumentFragment();
    const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

    news.forEach((item: Article, idx: number) => {
      const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

      const newsTempClone: HTMLElement | null = newsClone.querySelector('.news__item');
      if (newsTempClone) {
        if (idx % 2) newsTempClone.classList.add('alt');
      }

      const newsTempClone1: HTMLElement | null = newsClone.querySelector('.news__meta-photo');
      if (newsTempClone1) {
        newsTempClone1.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
      }

      const newsTempClone2 = newsClone.querySelector('.news__meta-author');
      if (newsTempClone2) {
        newsTempClone2.textContent = item.author || item.source.name;
      }

      const newsTempClone3: HTMLElement | null = newsClone.querySelector('.news__meta-date');
      if (newsTempClone3) {
        newsTempClone3.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
      }

      const newsTempClone4: HTMLElement | null = newsClone.querySelector('.news__description-title');
      if (newsTempClone4) {
        newsTempClone4.textContent = item.title;
      }

      const newsTempClone5: HTMLElement | null = newsClone.querySelector('.news__description-source');
      if (newsTempClone5) {
        newsTempClone5.textContent = item.source.name;
      }

      const newsTempClone6: HTMLElement | null = newsClone.querySelector('.news__description-content');
      if (newsTempClone6) {
        newsTempClone6.textContent = item.description;
      }

      const newsTempClone7: HTMLElement | null = newsClone.querySelector('.news__read-more a');
      if (newsTempClone7) {
        newsTempClone7.setAttribute('href', item.url);
      }

      fragment.append(newsClone);
    });

    const newsDoc = document.querySelector('.news');
    if (newsDoc) {
      newsDoc.innerHTML = '';
      newsDoc.appendChild(fragment);
    }
  }
}

export default News;
