import type { IRuleFunction } from '../interface';

export default function defineRule(fn: IRuleFunction, message: string) {
  return {
    fn,
    message,
  };
}
 