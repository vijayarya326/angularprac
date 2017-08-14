import { PracPage } from './app.po';

describe('prac App', () => {
  let page: PracPage;

  beforeEach(() => {
    page = new PracPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
