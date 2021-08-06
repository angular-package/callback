/**
 * Experimental shape for a generic type variable `Payload`.
 */
export interface CallbackPayload {
  /**
   * An optional action of a `string` type that describes the cause of performed callback.
   */
  action?: string;

  /**
   * An optional name of the function or method of a `string` type that performed callback.
   */
  name?: string;

  /**
   * An optional name of the parameter of a `string` type to which performed callback relates.
   */
  param?: string;

  /**
   * An optional value of of related parameter of any type.
   */
  value?: any;

  [index: string]: any;
}
