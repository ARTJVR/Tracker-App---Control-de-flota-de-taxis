import { CompanionPage } from './app.po';

describe('companion App', () => {
  let page: CompanionPage;

  beforeEach(() => {
    page = new CompanionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
