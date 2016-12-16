import { ProjectDemoPage } from './app.po';

describe('project-demo App', function() {
  let page: ProjectDemoPage;

  beforeEach(() => {
    page = new ProjectDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
