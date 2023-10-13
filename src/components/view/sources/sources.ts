import './sources.css';
import { Source, setElement } from '../../../types';

class Sources {
  public static draw(data: Source[]): void {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

    data.forEach((item) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

      setElement(sourceClone, '.source__item-name').textContent = item.name;
      setElement(sourceClone, '.source__item').setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    setElement(document, '.sources').append(fragment);
  }
}

export default Sources;
