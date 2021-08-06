/**
 * Function to handle the result of the `ResultCallback` function before its result returns with optional payload.
 */
export type ResultHandler<Payload extends object = any> = (
  // Result of the callback.
  result: boolean,

  // An optional object to provide more data.
  payload?: Payload
) => void;
