const writer = jest.fn();

describe('write function', () => {
  const string = 'a thing'
  writer
    .mockReturnValue(string);

    it('should return a thing', () => {
      const actual = writer();
      const expected = 'a thing';
      expect(actual).toBe(expected);
    
  });
});