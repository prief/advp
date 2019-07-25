import { check } from '../utils/auth';

function install(V, o = {}) {
  V.directive(o.name || 'auth', {
    inserted(el, b) {
      if (!check(b.value)) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    },
  });
}
export default { install };
