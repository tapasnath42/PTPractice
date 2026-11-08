import { test, expect } from '@playwright/test';
import testData from '../../data/sampledata3.json';

test('Read JSON data', () => {
  //expect(testData.length).toBeGreaterThan(0);
  //console.log(testData[0].name);
  console.log(testData.employeeId);
  console.log(testData.skills[0]);
  console.log(typeof testData);
});
