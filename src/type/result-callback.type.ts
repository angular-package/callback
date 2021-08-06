/**
 * Represents a callback function with parameters, a `result` of a `boolean` type, and an optional `payload` of a generic type `Payload`.
 * @var Payload The shape of the optional `payload` parameter that is constrained by the `object` type.
 * @param result What the result concerns is not specified, so it can be anything - the creator decides.
 * @param payload An optional `object` of a generic type `Payload` to provide more data.
 * @returns The return value is a `boolean` indicating state of the result of any action.
 */
export type ResultCallback<Payload extends object = any> = (
  result: boolean,
  payload?: Payload
) => boolean;
