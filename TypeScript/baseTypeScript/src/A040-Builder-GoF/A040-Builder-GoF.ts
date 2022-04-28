// GoF Builder
// padrão de projeto é mais utilizado quando vc precisa inicializar o obj que teria um
// constructor muito grande, como ele vc inicia aos poucos

export class RequestBuilder {
  private method: 'post' | 'get' | null = null;
  private url: string | null = null;

  setMethod(method: 'post' | 'get'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(
      `requisição enviada por method ${this.method} pela url: ${this.url}`,
    );
  }
}

const newRequest = new RequestBuilder();
newRequest.setMethod('get').setUrl('www.gooogle.com.br').send();
