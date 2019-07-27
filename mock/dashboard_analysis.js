module.exports = function(m) {
  let res = null;
  switch (m) {
    case 'GET':
      res = [10, 20, 30, 40, 50, 80];
      break;

    default:
      break;
  }
  return res;
};
