import { ResultCallback } from '../type/result-callback.type';
/**
 * The storage with callback functions of a `ResultCallback` type under specified names.
 */
export interface CallbackStorage<Payload extends object> {
  [index: string]: ResultCallback<Payload>;
}
