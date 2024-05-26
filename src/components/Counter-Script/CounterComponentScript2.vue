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

<script lang="ts" src="./CounterScript2">

</script>

<style scoped>
h1 {
  color: green;
}
</style>
