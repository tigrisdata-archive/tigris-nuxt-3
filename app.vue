<script setup>
const { data } = await useFetch("/api/prizes");
</script>

<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>
