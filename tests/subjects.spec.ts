import {test, expect} from '@playwright/test';
import {Homepage} from './pageobjects/homepage';

test.describe('Subjects', () => {
  let homepage: Homepage;

  test.beforeEach(async ({page}) => {
    homepage = new Homepage(page);
    await (await homepage.open()).acceptCookies();
  });

  test('Show subjects list', async () => {
    await homepage.showSubjects();
    const subjectsList = await homepage.subjectsList();
    expect(subjectsList.length).toBeGreaterThanOrEqual(1);
    expect(subjectsList.every(value => value)).toBeTruthy();
  });
});
