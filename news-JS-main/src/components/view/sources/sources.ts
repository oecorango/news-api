import './sources.css';
import { Source } from '../../../types';

class Sources {
  public static draw(data: Source[]): void {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

    data.forEach((item) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

      const newsSourseClone: HTMLElement | null = sourceClone.querySelector('.source__item-name');
      if (newsSourseClone) {
        newsSourseClone.textContent = item.name;
      }

      const newsSourseClone1: HTMLElement | null = sourceClone.querySelector('.source__item');
      if (newsSourseClone1) {
        newsSourseClone1.setAttribute('data-source-id', item.id);
      }

      fragment.append(sourceClone);
    });

    const sourceDoc = document.querySelector('.sources');
    if (sourceDoc) {
      sourceDoc.append(fragment);
    }
  }
}

export default Sources;
