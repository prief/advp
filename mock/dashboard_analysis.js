module.exports = function(m) {
  let res = null;
  switch (m) {
    case 'GET':
      res = [10, 20, 30, 40, 50, 60];
      break;

    default:
      break;
  }
  return res;
};
