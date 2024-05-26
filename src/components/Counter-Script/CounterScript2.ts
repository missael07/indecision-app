import { defineComponent } from "vue";
import { useCounter } from '@/composables/useCounter'; 

export default defineComponent({
  props: {
    value: { type: Number, required: true}
  },
  setup( props ) {

    const { counter, square, add, subs } = useCounter(props.value)
    return {
      counter,
      square,
      add,
      subs
    };
    return {
      counter,
      square,
      add,
      subs
    };
  },
});