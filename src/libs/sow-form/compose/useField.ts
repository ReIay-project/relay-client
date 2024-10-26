import { useForm } from '../compose/index';
import type { IError, IField, IFormRule } from '../interface';
import { computed, onMounted, onUnmounted, ref, Ref, watch } from 'vue';


interface FieldOptions {
  readonly name?: string;
  readonly modelValue: Ref<string>;
  readonly rules: IFormRule[];
  readonly field?: Ref<HTMLInputElement | null | undefined>
  readonly isLazy?: boolean;
}

// TODO должен работать даже если useForm не будет найдена
export default function useField(options: FieldOptions) {
  const form = useForm();

  const isViewInvalidMessage = ref(false);
  const activeViewInvalidMessage = () => isViewInvalidMessage.value = true;

  function validate() {
    activeViewInvalidMessage();
  }  


  const fieldKey: Ref<null | number> = ref(null);

  const serverError: Ref<null | IError> = ref(null);
  function addServerError(error: IError) {
    serverError.value = error;
    validate();
  }

  function removeServerError() {
    serverError.value = null; 
  }

 
  watch(options.modelValue, () => {
    removeServerError();
    form?.checkValid();
  });

  const invalidMessage = computed(
    () => {
      const message = serverError.value?.message || options.rules.find(({ fn }) => !fn(options.modelValue.value))?.message || '';

      if (options.isLazy && !isViewInvalidMessage.value) return '';
      return message;
    }

  );

  const isValid = computed(() => !invalidMessage.value);

  const fieldData: IField = {
    modelValue: options.modelValue,
    isValid: isValid,
    key: fieldKey,
    invalidMessage: invalidMessage,
    name: options.name,
    addServerError,
    validate
  };

  onMounted(() => {
    fieldKey.value = form?.registerField(fieldData) || null;
    options.field?.value?.addEventListener('blur', activeViewInvalidMessage);
  });

  onUnmounted(() => {
    if (fieldKey.value) form?.unregisterField(fieldKey.value);
    options.field?.value?.removeEventListener('focus', activeViewInvalidMessage);
  });

  return {
    isValid,
    invalidMessage,
    serverError,
    addServerError,
    removeServerError,
  };
}
