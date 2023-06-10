import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '7cc0f9b1147148cea8501478d9c54264', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
