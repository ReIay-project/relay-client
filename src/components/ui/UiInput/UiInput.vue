<template>
  <div class="space-y-1">
    <label
      class="input input-bordered flex items-center gap-2"
      :class="{
        'input-disabled': disabled,
        'input-error': errorMessage
      }"
    >
      <span class="text-accent">
        {{ label }}
      </span>
      <input
        ref="inputField"
        v-model="value"
        :placeholder="placeholder"
        :name="name"
        :type="type"
        :disabled="disabled"
        @blur="onBlur"
      >
    </label>

    <div
      v-if="errorMessage"
      class="text-error"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
// import { onMounted, ref } from 'vue';

// import { MaskInput, MaskInputOptions } from 'maska';
import { useField } from 'vee-validate';
import { onMounted, ref } from 'vue';
import { MaskInput, MaskInputOptions } from 'maska';

const props = withDefaults(defineProps<{
  name: string,
  label?: string,
  placeholder?: string
  maska?: string | MaskInputOptions
  disabled?: boolean
  type?: 'text' | 'password' | 'email' | 'number'
}>(), {
  type: 'text'
});


const { errorMessage, value } = useField(
  () => props.name
);

const emit = defineEmits<{
  (e: 'focus', evt: FocusEvent): void;
  (e: 'blur', evt: FocusEvent): void;
}>();

const currentInput = ref<null | HTMLInputElement>(null);

onMounted(() => {
  if (props.maska && currentInput.value) {
    new MaskInput(
      currentInput.value,
      typeof props.maska === 'string'
        ? { mask: props.maska, eager: true }
        : props.maska
    );
  }
});



function onBlur(e: FocusEvent) {
  emit('blur', e);

}
</script>

<style scoped>

</style>