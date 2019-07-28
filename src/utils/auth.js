const cur = ['user'];
export { cur };
export function getCA() {
  return cur;
}

export function check(a) {
  const ca = getCA();
  return ca.some(item => a.includes(item));
}

export function isLogin() {
  const ca = getCA();
  return ca && ca[0] !== 'guest';
}
