/**
 * Internal function to handle the arguments of the `ResultCallback` function before its result return.
 */
export type ResultHandler<Value = any, Payload = object> = (
  result: boolean,
  value: Value,
  payload?: Payload
) => void;
