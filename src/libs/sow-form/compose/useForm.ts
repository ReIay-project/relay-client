import { inject } from 'vue';
import type { ISowForm } from '../interface';


export default function useForm(): ISowForm | null {
  // Так же сделать возможность искать форму и получать ее данные вне компонента
  // Не вызывать ошибку, а отдавать объект с мок функциями который будет просто существовать по приколу, но ничего не делать
  return inject('sow-form', null) as ISowForm | null;
}
 