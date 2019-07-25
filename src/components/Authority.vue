<script>
import { check } from '../utils/auth';
export default {
  functional: true,
  props: {
    authority: {
      type: Array,
      required: true,
    },
  },
  render(h, c) {
    const { props, scopedSlots } = c;
    return check(props.authority) ? scopedSlots.default() : null;
  },
};
</script>
