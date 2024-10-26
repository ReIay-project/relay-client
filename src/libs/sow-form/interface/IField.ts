import { ComputedRef, Ref, WritableComputedRef } from 'vue';
import { IError } from './IError.ts';

export interface IField {
  readonly name?: string;
  readonly key: Ref<number | null>;
  readonly isValid: ComputedRef<boolean>;
  readonly modelValue: WritableComputedRef<string> | Ref<string>;
  readonly invalidMessage: ComputedRef<string>;
  readonly addServerError: (error: IError) => void;
}
 