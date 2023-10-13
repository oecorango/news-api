import AppLoader from './appLoader';
import { Callback } from '../../types';

class AppController extends AppLoader {
  public getSources<T>(callback: Callback<T>): void {
    super.getResp({ endpoint: 'sources' }, callback);
  }

  public getNews<T>(e: MouseEvent, callback: Callback<T>): void {
    let target = e.target as HTMLElement;
    const newsContainer = e.currentTarget as HTMLElement;

    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        let sourceId = target.getAttribute('data-source-id');
        if (sourceId === null) {
          sourceId = 'null';
        }
        if (newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: 'everything',
              options: {
                sources: sourceId,
              },
            },
            callback,
          );
        }
        return;
      }
      target = target.parentNode as HTMLElement;
    }
  }
}

export default AppController;
