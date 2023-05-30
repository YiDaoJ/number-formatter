import format from '.';

describe('format', () => {
  it('input value is undefined', () => {
    expect(format(undefined)).toBe('0,00');
  });

  it('format the value with default options', () => {
    expect(format(2.555)).toBe('2,56');
    expect(format(10000.5555, 3)).toBe('10.000,556');
    expect(format(100000.28374, 2, ',', '.')).toBe('100.000,28');
    expect(format(100000.55555, 1, '.', ',')).toBe('100,000.6');
    expect(format(1.555, 10, ',', '.')).toBe('1,5550000000');
    expect(format('1.5555', 2)).toBe('1,56');
    // negative input value
    expect(format(-1.55555, 4)).toBe('-1,5555');
    expect(format('-1.55555', 4)).toBe('-1,5555');
    expect(format(-2)).toBe('-2,00');
  });

  it('format the value and round down', () => {
    expect(format(1.55555, 3, ',', '.', false)).toBe('1,555');
    expect(format(10000.5555, 3, ',', '.', false)).toBe('10.000,555');
    expect(format(100000.55555, 1, '.', ',', false)).toBe('100,000.5');
  });
});
