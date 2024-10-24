<template>
  <main>
    <StorybookExample
      title="te"
      :item="{ name: '' }"
      :list="[]"
    />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
import { invoke } from '@tauri-apps/api/core';
import StorybookExample from './components/examples/StorybookExample/StorybookExample.vue';

export default defineComponent({
  name: 'App',
  components: { StorybookExample },
  data: () => ({
    greetMsg: '',
    name: ''
  }),
  methods: {
    async greet() {
      this.greetMsg = await invoke('greet', { name: this.name });
    }
  }
});
</script>

<style>

</style>