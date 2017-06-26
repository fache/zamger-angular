import { ZamgerPage } from './app.po';

describe('zamger App', () => {
  let page: ZamgerPage;

  beforeEach(() => {
    page = new ZamgerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
