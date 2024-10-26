import type { IError } from '../interface';

export default function defineError(name: string, message: string): IError {
  return {
    id: name + message + Math.random(),
    name,
    message,
  };
}
 