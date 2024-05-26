import { computed, ref } from "vue";

export const useCounter = (value: number) => {

      const counter = ref<number>(value);
      
      const square = computed( () => counter.value * counter.value);
      
      const add = () => {
          counter.value++;
      }
      
      const subs = () => {
          counter.value--;
      }
    return {
        counter,
        square,
        add,
        subs
    }
}