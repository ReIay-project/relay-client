import { useForm } from '../compose/index';
import { computed, onMounted, onUnmounted, reactive, ref, watch } from '#imports';
import type { IError, IField, IFormRule, ISowForm } from '../interface';
import type { Reactive, Ref } from 'vue';


interface FieldOptions {
  readonly name?: string;
  readonly modelValue: Ref<string>;
  readonly rules: IFormRule[];
}

// TODO должен работать даже если useForm не будет найдена
export default function useField(options: FieldOptions) {
  const form = useForm();

  const fieldKey: Ref<null | number> = ref(null);

  const serverError: Ref<null | IError> = ref(null);
  function addServerError(error: IError) {
    serverError.value = error;
  }

  function removeServerError() {
    serverError.value = null;
  }
 
  watch(options.modelValue, () => {
    removeServerError();
    form?.checkValid();
  });

  const invalidMessage = computed(
    () =>
      serverError.value?.message ||
      options.rules.find(({ fn }) => !fn(options.modelValue.value))?.message ||
      ''
  );

  const isValid = computed(() => !invalidMessage.value);

  const fieldData: IField = {
    modelValue: options.modelValue,
    isValid: isValid,
    key: fieldKey,
    invalidMessage: invalidMessage,
    name: options.name,
    addServerError,
  };

  onMounted(() => {
    fieldKey.value = form?.registerField(fieldData) || null;
  });

  onUnmounted(() => {
    if (fieldKey.value) form?.unregisterField(fieldKey.value);
  });

  return {
    isValid,
    invalidMessage,
    serverError,
    addServerError,
    removeServerError,
  };
}
