<template>
  <div class="w-screen h-screen">
    <RouterView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LayoutDefault'
});
</script>

<style scoped>

</style>