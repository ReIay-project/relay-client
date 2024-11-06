<template>
  <div
    class="w-full h-full p-6"
  >
    <component :is="isRenderedComponent" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { serverPages } from '../assets/mock/serverPages.ts';
import { ServerPageModel } from '../assets/model/ServerPageModel.ts';
import ServerChannelText from '../components/views/server/ServerChannelText/ServerChannelText.vue';
import ServerVoiceChannel from '../components/views/server/ServerVoiceChannel/ServerVoiceChannel.vue';

const route = useRoute();

const serverPage = ref<ServerPageModel | null>(null);
serverPage.value = serverPages.find(page => page.route.params.pageId === route.params.pageId) || null;

const isRenderedComponent = computed(() => {
  if (!serverPage.value) return null;

  switch (serverPage.value?.type) {
    case 'text':
      return ServerChannelText;
    case 'voice':
      return ServerVoiceChannel;
      default:
        return null;
  }
});
</script>

<style scoped>

</style>