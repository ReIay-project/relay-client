<template>
  <div class="w-full flex flex-col">
    <router-link
      v-for="(page, key) in serverPagesList"
      :key="key"
      :to="page.route"
      class="font-semibold p-2 hover:bg-base-300"
    >
      {{ page.name }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ServerPageModel } from '../../../../assets/model/ServerPageModel.ts';
import { serverPages } from '../../../../assets/mock/serverPages.ts';

const serverPagesList = ref<ServerPageModel[]>(serverPages);
</script>

<style scoped lang="postcss">

</style>