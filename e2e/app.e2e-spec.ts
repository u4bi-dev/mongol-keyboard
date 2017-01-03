import { MongolKeyboardPage } from './app.po';

describe('mongol-keyboard App', function() {
  let page: MongolKeyboardPage;

  beforeEach(() => {
    page = new MongolKeyboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
