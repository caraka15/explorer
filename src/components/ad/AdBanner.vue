<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

const aa = computed(() => {
  const hostname = location.hostname;
  if (hostname === 'testnet.crxanode.me') {
    return '2396360';
  } else if (hostname === 'crxanode.me') {
    return '2395639';
  } else {
    return '2396360';
  }
});
</script>
<template></template>
