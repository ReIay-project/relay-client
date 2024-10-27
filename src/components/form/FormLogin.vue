<template>
  <SowForm
    ref="loginForm"
    class="space-y-4"
    @submit.prevent="onSubmit"
  >
    <h4 class="text-3xl font-bold">
      Login
    </h4>
    <UiInput
      v-model="formData.host"
      label="Host/IP:"
      placeholder="Type your host ..."
      :rules="rules"
    />
    <UiInput
      v-model="formData.name"
      label="Username:"
      placeholder="Type your username ..."
      :rules="rules"
    />
    <UiInput
      v-model="formData.password"
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
  </Sowform>

  <!-- Нужно продумать как будут работать тосты -->
  <div
    v-if="isProcessing"
    class="toast"
  >
    <div class="alert alert-info">
      <span>Login success</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import UiInput from '../ui/UiInput/UiInput.vue';
import { SowForm } from '../../libs/sow-form/components';
import { ref } from 'vue';
import { useAwait, useProcessing } from '../../assets/composables';
import { delay } from '../../assets/utils';
import { defineRule } from '../../libs/sow-form/utils';

const loginForm = ref<InstanceType<typeof SowForm> | null>(null);


const formData = ref({
  host: '',
  name: '',
  password: ''
});

const rules = [
  defineRule((v) => !!v, 'This field is required.')
];

const { isProcessing, start } = useProcessing();

const {
  isAwait,
  onSubmit
} = useAwait({
  async onSubmit() {
    if (loginForm.value?.validate()) {
      await delay(2000);
      start();

    }
  }
});

</script>

<style scoped>

</style>