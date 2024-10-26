<template>
  <div class="space-y-1">
    <label
      class="input input-bordered flex items-center gap-2"
      :class="{
        'input-disabled': disabled,
        'input-error': invalidMessage
      }"
    >
      <span class="text-accent">
        {{ label }}
      </span>
      <input
        ref="inputField"
        v-model="innerValue"
        class="grow"
        :placeholder="placeholder"
        :name="name"
        :value="modelValue"
        :type="type"
        :disabled="disabled"
      >
    </label>

    <div
      v-if="invalidMessage"
      class="text-error"
    >
      {{ invalidMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useField } from '../../../libs/sow-form/compose';
import { IFormRule } from '../../../libs/sow-form/interface';
import { computed, InputTypeHTMLAttribute, ref } from 'vue';

const emit = defineEmits(['update:modelValue']);

const props = withDefaults(defineProps<{
  disabled?: boolean;
  placeholder?: string;
  label?: string;
  type?: InputTypeHTMLAttribute
  name?: string
  rules?: IFormRule[]
  modelValue: string
}>(), {
  modelValue: '',
  type: 'text'
});

const innerValue = computed({
  get() {
    return props.modelValue;
  },
  set(v: string) {
    emit('update:modelValue', v);
  },
});

const inputField = ref<HTMLInputElement | null>(null);

const { invalidMessage } = useField({
  modelValue: innerValue,
  rules: props.rules || [],
  name: props.name,
  field: inputField,
  isLazy: true
});
</script>

<style scoped>

</style>