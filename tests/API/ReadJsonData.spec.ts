import { test, expect } from '@playwright/test';
import testData from '../../data/sampledata2.json';

test('Read JSON data', () => {
  //expect(testData.length).toBeGreaterThan(0);
  //console.log(testData[0].name);
  console.log(testData[0]);
  console.log(testData[0].address.street);
  console.log(typeof testData[0].address.street);
});
