module.exports = function(m) {
  let res = null;
  switch (m) {
    case 'POST':
      res = { status: 'Ok' };
      break;

    default:
      break;
  }
  return res;
};
