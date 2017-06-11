import { BoastPostsPage } from './app.po';

describe('boast-posts App', () => {
  let page: BoastPostsPage;

  beforeEach(() => {
    page = new BoastPostsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
