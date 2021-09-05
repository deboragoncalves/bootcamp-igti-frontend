import { ListContactCrudPage } from './app.po';

describe('list-contact-crud App', function() {
  let page: ListContactCrudPage;

  beforeEach(() => {
    page = new ListContactCrudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
