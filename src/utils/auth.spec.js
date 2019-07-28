import { check, cur } from './auth';

describe('auth test', () => {
  it('empty test', () => {
    cur.splice(0, cur.length);
    expect(check(['user'])).toEqual(false);
    expect(check(['admin'])).toEqual(false);
  });
  it('user test', () => {
    cur.splice(0, cur.length);
    cur.push('user');
    expect(check(['user'])).toEqual(true);
    expect(check(['admin'])).toEqual(false);
  });
  it('admin test', () => {
    cur.push('admin');
    expect(check(['user'])).toEqual(true);
    expect(check(['admin'])).toEqual(true);
    expect(check(['admin', 'user'])).toEqual(true);
  });
});
