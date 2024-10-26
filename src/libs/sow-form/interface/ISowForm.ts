import type { IField } from './IField.ts';
import type { Ref } from 'vue';

export interface ISowForm {
  registerField: (field: IField) => number;
  unregisterField: (fieldKey: number) => void;
  checkValid: () => void;
  fields: Ref<IField[]>;
  isValid: Ref<boolean>;
}
 