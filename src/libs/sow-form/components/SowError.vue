<template>
  <component
    :is="tag"
    v-if="invalidMessage"
  >
    {{ invalidMessage }}
  </component>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, computed } from 'vue';
import useForm from '../compose/useForm';
import { IField } from '../interface';

const { fields } = useForm();

const props = withDefaults(
  defineProps<{
    tag: 'div' | 'span';
    name: string;
  }>(), 
  {
    tag: 'span',
  }
);

const invalidMessage = computed(() => {
  return fields.value.find((i: IField) => i.name === props.name)?.invalidMessage;
});
</script>

<style scoped></style>
