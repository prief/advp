export function getCA() {
  return ['admin'];
}

export function check(a) {
  const ca = getCA();
  return ca.some(item => a.includes(item));
}

export function isLogin() {
  const ca = getCA();
  return ca && ca[0] !== 'guest';
}
