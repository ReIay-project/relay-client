<template>
  <div
    class="
      grid grid-cols-12
      h-screen
    "
  >
    <div class="col-span-2 border-r p-4">
      <ServerAside />
    </div>
    <div
      :key="$route.fullPath"
      class="col-span-10"
    >
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">

import ServerAside from '../components/views/server/ServerAside/ServerAside.vue';
</script>

<style scoped>

</style>