import { MorpionPage } from './app.po';

describe('morpion App', function() {
  let page: MorpionPage;

  beforeEach(() => {
    page = new MorpionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
