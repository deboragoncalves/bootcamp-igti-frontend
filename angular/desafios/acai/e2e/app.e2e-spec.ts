import { AcaiPage } from './app.po';

describe('acai App', function() {
  let page: AcaiPage;

  beforeEach(() => {
    page = new AcaiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
