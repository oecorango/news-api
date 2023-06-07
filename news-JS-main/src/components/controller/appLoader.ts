import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: '740b9d1e99534ef79633a19976bca725', // получите свой ключ https://newsapi.org/  7cc0f9b1147148cea8501478d9c54264
    });
  }
}

export default AppLoader;
