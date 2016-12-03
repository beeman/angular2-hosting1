import { Angular2Hosting1Page } from './app.po';

describe('angular2-hosting1 App', function() {
  let page: Angular2Hosting1Page;

  beforeEach(() => {
    page = new Angular2Hosting1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
