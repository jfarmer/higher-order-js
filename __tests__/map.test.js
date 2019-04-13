const id = require('../lib/id');
const map = require('../lib/map');

const inc = x => x + 1;

describe('map', () => {
  describe('when the list is empty', () => {
    test('returns the empty list', () => {
      expect(map(id, [])).toEqual([]);
    });
  });

  test('increments every number', () => {
    expect(map(inc, [10, 20, 30])).toEqual([11, 21, 31]);
  });

  test('is curried', () => {
    const list = [10, 20, 30];

    expect(map(inc, list)).toEqual(map(inc)(list));
  });
});
