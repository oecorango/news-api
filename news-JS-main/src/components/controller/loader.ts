interface Resp {
  endpoint: string;
  options: object;
}

// interface Tcallback {
//   tempObj: object;
//   newsInfo: string;
// }

// type Options =
//   | Partial<{
//       sources?: string;
//       category?: string;
//       language?: string;
//     }>
//   | undefined;

class Loader {
  private baseLink: string;

  private options: object;

  constructor(baseLink: string, options: object) {
    this.baseLink = baseLink;
    this.options = options;
  }

  public getResp(
    { endpoint, options }: Resp,
    callback = (): void => {
      console.error('No callback for GET response');
    },
  ): void {
    this.load('GET', endpoint, callback, options);
  }

  private static errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }
    return res;
  }

  private makeUrl(options: object, endpoint: string): string {
    const urlOptions = { ...this.options, ...options };

    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
    });

    return url.slice(0, -1);
  }

  private load(method: string, endpoint: string, callback: { (): void; (arg0: void): void }, options: object): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(Loader.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
