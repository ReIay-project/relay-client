<template>
  <div>
    <div>Layout error</div>
    <RouterView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LayoutError'
});
</script>

<style scoped>

</style>