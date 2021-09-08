import { AppFitnessPage } from './app.po';

describe('app-fitness App', function() {
  let page: AppFitnessPage;

  beforeEach(() => {
    page = new AppFitnessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
