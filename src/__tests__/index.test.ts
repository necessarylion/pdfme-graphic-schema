import { greet } from '../index';

describe('greet', () => {
  it('should return greeting with the provided name', () => {
    expect(greet('John')).toBe('Hello, John!');
  });

  it('should work with empty string', () => {
    expect(greet('')).toBe('Hello, !');
  });

  it('should work with special characters', () => {
    expect(greet('John & Jane')).toBe('Hello, John & Jane!');
  });
}); 