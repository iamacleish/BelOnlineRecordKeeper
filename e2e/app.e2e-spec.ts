import { RouterSandboxPage } from './app.po';

describe('router-sandbox App', () => {
  let page: RouterSandboxPage;

  beforeEach(() => {
    page = new RouterSandboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
