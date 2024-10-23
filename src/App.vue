<template>
  <main>

  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { invoke } from "@tauri-apps/api/core";

export default defineComponent({
  name: 'App',
  data: () => ({
    greetMsg: "",
    name: ""
  }),
  methods: {
    async greet() {
      this.greetMsg = await invoke("greet", { name: this.name });
    }
  }
})
</script>

<style>

</style>