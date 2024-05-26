<template>
  <h1 className="text-3xl font-bold underline">Hello world!</h1>
  <hr />
  <Counter :value="1" />
  <CounterScript :value="2" />
  <CounterScript2 :value="3" />
</template>

<script lang="ts" setup>
import Counter from "@/components/CounterComponent.vue";
import CounterScript from "@/components/Counter-Script/CounterComponentScript.vue";
import CounterScript2 from "@/components/Counter-Script/CounterComponentScript2.vue";
</script>

<style scoped></style>
