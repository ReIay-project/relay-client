<template>
  <form
    class="space-y-4"
    @submit.prevent="onSubmit"
  >
    <h4 class="text-3xl font-bold">
      Login
    </h4>
    <UiInput
      label="Host/IP:"
      name="host"
      placeholder="Type your host ..."
    />
    <UiInput
      label="Username:"
      name="username"
      placeholder="Type your username ..."
    />
    <UiInput
      label="Password:"
      placeholder="Type server password ..."
      type="password"
    />
    <div class="flex">
      <button
        type="submit"
        class="
          btn btn-accent w-full
          lg:ml-auto lg:w-auto
        "
        :class="{
          'pointer-events-none': isAwait
        }"
      >
        <span
          v-if="isAwait"
          class="loading loading-bars"
        />
        <span v-else>Submit</span>
      </button>
    </div>

    <!-- Нужно продумать как будут работать тосты -->
    <div
      v-if="isProcessing"
      class="toast"
    >
      <div class="alert alert-info">
        <span>Login success</span>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import UiInput from '../ui/UiInput/UiInput.vue';
import { useAwait, useProcessing } from '../../assets/composables';
import { delay } from '../../assets/utils';
import { useForm } from 'vee-validate';
import { object, string } from 'yup';



const { validate } = useForm({
  validationSchema: object({
    host: string().required(),
    username: string().required(),
  })
});
const { isProcessing, start } = useProcessing();

const {
  isAwait,
  onSubmit
} = useAwait({
  async onSubmit() {
    const { valid } = await validate();

    if (valid) {
      await delay(2000);
      start();
    }
  }
});

</script>

<style scoped>

</style>