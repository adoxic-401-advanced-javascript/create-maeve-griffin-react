import { toBindingIdentifierName } from "@babel/types";

const writer = jest.fn();

describe('write fuction', () => {
  writer(path, string)
    .mockReturnValue(string);

  const actual = writer('./something.txt', 'a thing');
  const expected = 'a thing';
  expect(actual).toBe(expected);
});