import { ShoppingCartV2ClientPage } from './app.po';

describe('shopping-cart-v2-client App', () => {
  let page: ShoppingCartV2ClientPage;

  beforeEach(() => {
    page = new ShoppingCartV2ClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
