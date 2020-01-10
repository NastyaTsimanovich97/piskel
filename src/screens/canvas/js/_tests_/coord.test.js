const coord = require('../coords');

describe('coords', () => {
  it('should return array client', () => {
    expect(coord(150, 140)).toBeDefined();
  })
})