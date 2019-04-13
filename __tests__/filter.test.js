const id = require('../lib/id');
const filter = require('../lib/filter');

const isEven = x => x % 2 === 0;

describe('filter', () => {
  describe('when list is empty', () => {
    test('returns the empty list', () => {
      expect(filter(id, [])).toEqual([]);
    });
  });

  test('filters even numbers', () => {
    const list = [1, 2, 3, 4, 5, 6];

    expect(filter(isEven, list)).toEqual([2, 4, 6]);
  });

  test('is curried', () => {
    const list = [1, 2, 3, 4, 5, 6];

    expect(filter(isEven, list)).toEqual(filter(isEven)(list));
  });
});
