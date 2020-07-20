import { getCalculation } from './calculate';
import { customExpression2 } from '../expressions';

describe('`getCalculation` helper method', () => {
  test('return error when input expression not match to any of existing', () => {
    const inputData = {
      A: false,
      B: false,
      C: false,
      D: 15.5,
      E: 50,
      F: 15
    };
    const expectedResult = 'error';

    expect(getCalculation(inputData)).toBe(expectedResult);
  });

  test('return correct result with default expressions', () => {
    const inputData = {
      A: true,
      B: true,
      C: false,
      D: 15.5,
      E: 50,
      F: 15
    };
    const expectedResult = 'M | 93';

    expect(getCalculation(inputData)).toBe(expectedResult);
  });

  test('return correct result with custom expression', () => {
    const inputData = {
      A: true,
      B: false,
      C: true,
      D: 15.5,
      E: 50,
      F: 15
    };
    const expectedResult = 'M | 38.25';

    expect(getCalculation(inputData, [customExpression2])).toBe(expectedResult);
  });

});