import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://rss-news-api.onrender.com/', {
      apiKey: '7cc0f9b1147148cea8501478d9c54264', // получите свой ключ https://newsapi.org/  7cc0f9b1147148cea8501478d9c54264   |   740b9d1e99534ef79633a19976bca725
    });
  }
}

export default AppLoader;
