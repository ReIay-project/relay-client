<template>
  <form
    class="flex flex-col h-full"
    @submit.prevent="sendMessage"
  >
    <div
      v-for="(message, key) in messages"
      :key="key"
      class="flex gap-2"
    >
      <time>19:25</time>
      <div
        :class="{
          'text-error': message.user === MY_USER,
          'text-success': message.user !== MY_USER
        }"
      >
        {{ message.user }}
      </div>
      <div>{{ message.message }}</div>
    </div>


    <UiInput
      class="mt-auto"
      type="text"
      placeholder="Type your message..."
      label="Message: "
      name="message"
    />
  </form>
</template>

<script setup lang="ts">
import UiInput from '../../../ui/UiInput/UiInput.vue';
import { ref } from 'vue';
import { useForm } from 'vee-validate';

const MY_USER = 'Kotaro';

const messages = ref([
  {
    time: '19:25',
    message: 'lorem23 ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, volupt aspernatur. Quos, quae.',
    user: 'Kotaro'
  },
  {
    time: '19:26',
    message: 'How are you?',
    user: 'IgorKoks'
  }
]);

const { values, resetForm } = useForm();


function sendMessage() {
  messages.value.push({
    time: new Date().toLocaleTimeString(),
    message: values.message,
    user: MY_USER
  });

  resetForm();
}
</script>

<style scoped>

</style>