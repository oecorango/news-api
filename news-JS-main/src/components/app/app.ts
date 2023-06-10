import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { DataNews, DataSources, setElement } from '../../types';

class App {
  private controller: AppController;

  public view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  public start(): void {
    const doc = setElement(document, '.sources');
    doc.addEventListener('click', (e: MouseEvent): void =>
      this.controller.getNews(e, (data: DataNews) => AppView.drawNews(data)),
    );
    this.controller.getSources((data: DataSources) => AppView.drawSources(data));
  }
}

export default App;
