<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ square }}</h3>

    <div>
      <button @click="add">+1</button>
      <button @click="subs">-1</button>
    </div>
  </section>
</template>

<script lang="ts">
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
  },
});
</script>

<style scoped>
h1 {
  color: green;
}
</style>
