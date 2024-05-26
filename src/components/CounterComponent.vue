<template>
    <section>
      <h3>Counter: {{ counter }}</h3>
      <h3>Square: {{ square }}</h3>
  
      <div>
        <button @click="add" class="btn">+1</button>
        <button @click="subs" class="btn">-1</button>
      </div>
    </section>
  </template>
  
  <script lang="ts" setup>
  import { useCounter } from '@/composables/useCounter';  
  const props = defineProps<{
    value: number;
  }>();
  const { counter, square, add, subs } = useCounter(props.value)
  </script>
  
  <style scoped>
  .btn {
    @apply p-5 bg-blue-500 rounded hover:bg-blue-700 mr-2
  }
  </style>
  