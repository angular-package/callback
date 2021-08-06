// @angular-package/type.
import {
  // Object.
  is,
  guard,
} from '@angular-package/type';
// @angular-package/error
import { ErrorMessage, ValidationError } from '@angular-package/error';
// Interface.
import { CallbackStorage } from '../interface/callback-storage.interface';
// Type.
import { ResultCallback } from '../type/result-callback.type';
import { ResultHandler } from '../type/result-handler.type';
/**
 * Manages the callback function of a `ResultCallback` type.
 */
export class Callback<AllowNames extends string> {
  //#region private properties
  /**
   * Allowed names under which callback functions can be stored.
   */
  #allowedNames = new Set();

  /**
   * Callback storage.
   */
  #storage = new Map();
  //#endregion

  //#region static methods
  /**
   * Defines the `function` of `ResultCallback` type that contains a `ResultHandler` function to handle the `result` and optional
   * `payload`.
   * @var Payload The shape of the optional payload parameter of the `ResultCallback` and `ResultHandler` function, which is constrained by
   * the `object` type. Its value can be captured from a type of the provided `capturePayload` optional parameter.
   * @param resultHandler The `function` that is guarded by the `ResultHandler` type to handle the result and optional payload of the
   * `ResultCallback` function.
   * @param capturePayload An optional `object` of generic type `Payload` that is used only to capture the value by the generic type
   * variable `Payload`.
   * @returns The return value is a function of a `ResultCallback` type that contains a function that handles its result.
   */
  static defineResultCallback<Payload extends object>(
    resultHandler: ResultHandler<Payload>,
    capturePayload?: Payload
  ): ResultCallback<Payload> {
    return (result: boolean, payload?: Payload) => {
      if (is.function(resultHandler)) {
        resultHandler(result, payload);
      }
      return result;
    };
  }

  /**
   * Defines `function` of `ResultCallback` type to throw `ValidationError` with a specified `message` on a state from `throwOnState`.
   * Provided `payload` from defined callback function of `ResultCallback` is being passed to a thrown error of `ValidationError`.
   * @param message The message of `string` type or `ErrorMessage` interface to throw with an error of `ValidationError`.
   * @param throwOnState A state of `boolean` type on which an error of `ValidationError` should be thrown. By default, it's set to `false`.
   * @param capturePayload An optional `object` of generic type `Payload` that is used only to capture the value by the generic type
   * variable `Payload`.
   * @returns The return value is a function of a `ResultCallback` type that throws a `ValidationError`.
   */
  static defineErrorCallback<Payload extends object>(
    message: string | ErrorMessage,
    throwOnState: boolean = false,
    capturePayload?: Payload
  ): ResultCallback<Payload> {
    return Callback.defineResultCallback<Payload>(
      (result: boolean, payload?: Payload): void => {
        if (is.false(throwOnState) ? is.false(result) : is.true(result)) {
          throw Object.assign(new ValidationError(message), { payload });
        }
      }
    );
  }

  /**
   * Guards provided `resultCallback` to be `ResultCallback` type.
   * @param resultCallback The function of `ResultCallback` type with the shape of payload from the generic variable `Payload` to guard.
   * @returns The return value is a `boolean` indicating whether the provided `resultCallback` parameter is a `function`.
   */
  static guard<Payload extends object>(
    resultCallback: ResultCallback<Payload>
  ): resultCallback is ResultCallback<Payload> {
    return guard.function(resultCallback);
  }

  /**
   * Checks if the provided `value` is an instance of `Callback` with optional indicating allowed names under which callback functions can
   * be stored.
   * @param value The `value` of any type to check.
   * @param allowNames A rest parameter of `AllowNames` that is used only to capture the value by the generic type variable
   * `AllowNames` to indicate allowed names for the `Callback<AllowNames>` return type.
   * @returns The return value is a `boolean` indicating whether provided `value` is an instance of `Callback`.
   */
  static isCallback<AllowNames extends string>(
    value: any,
    ...allowNames: AllowNames[]
  ): value is Callback<AllowNames> {
    return is.instance(value, Callback);
  }
  //#endregion

  /**
   * Initialize an instance of a `Callback` with the allowed names under which callback functions can be stored.
   * @param allowNames A rest parameter of allowed names of a `string` type, under which callback functions can be stored.
   */
  constructor(...allowNames: AllowNames[]) {
    this.#allowedNames = guard.array(allowNames)
      ? new Set(allowNames)
      : this.#allowedNames;
  }

  //#region instance methods
  /**
   * Gets from the storage specified by-name callback function of a `ResultCallback` type.
   * @var Payload The shape of the optional payload parameter of the ResultCallback function, which is constrained by the object type.
   * Its value can be captured from a type of the provided capturePayload optional parameter.
   * @var Name A generic type variable `Name` constrained by the `AllowNames` indicates the name under which callback function is picked
   * from the storage. It is linked with the return type `Pick<CallbackStorage, Name>[Name]` that refers exactly to the type, which is
   * `ResultCallback` of the callback function picked from the storage by `Name`. By default, its value is captured from the provided
   * `name`.
   * @param name A `string` type name that is restricted by the `AllowNames` to pick stored callback function.
   * @param capturePayload An optional `object` of generic type `Payload` that is used only to capture the value by the generic type
   * variable `Payload`.
   * @returns The return value is a callback function picked from the storage.
   */
  public getCallback<
    Payload extends object,
    Name extends AllowNames = AllowNames
  >(
    name: Name,
    capturePayload?: Payload
  ): Pick<CallbackStorage<Payload>, Name>[Name] {
    return this.#storage.get(name);
  }

  /**
   * Sets a callback function of a `ResultCallback` type that throws `ValidationError` with a specified message on a state from the provided
   * `throwOnState` to the storage under the given allowed name restricted by `AllowNames`.
   * @param name The name of a `string` type under which the callback `function` is stored.
   * @param message An error `message` of a `string` type or of an `ErrorMessage` interface for the instance of `ValidationError`.
   * @returns The return value is an instance of a `Callback`.
   */
   public setErrorCallback<Name extends AllowNames>(
    name: Name,
    message: string | ErrorMessage,
    throwOnState: boolean = false
  ): this {
    this.setResultCallback(
      name,
      Callback.defineErrorCallback(message, throwOnState)
    );
    return this;
  }

  /**
   * Sets a callback function of a `ResultCallback` type to the storage under the given allowed `name`, which is restricted by `AllowNames`.
   * @param name The name of a `string` type under which the callback function is stored. The value is string-guarded and
   * checked its allowed state.
   * @param resultHandler The function of `ResultHandler` to handle the result of the `ResultCallback` function before its result returns.
   * @param capturePayload An optional `object` that is used to capture the type of generic type variable `Payload`.
   * @returns The return value is an instance of `Callback`.
   */
  public setResultCallback<
    Payload extends object,
    Name extends AllowNames = AllowNames
  >(
    name: Name,
    resultHandler: ResultHandler<Payload>,
    capturePayload?: Payload
  ): this {
    if (this.isNameAllowed(name)) {
      this.#storage.set(
        name,
        Callback.defineResultCallback<Payload>(resultHandler)
      );
    }
    return this;
  }
  //#endregion

  /**
   * Checks if the provided `name` of a `string` type is the allowed `name` under which the callback function can be stored.
   * @param name The name of a `string` type to check.
   * @returns The return value is a `boolean` type indicating the provided `name` is the allowed name under which the callback
   * function can be stored.
   */
  private isNameAllowed<Name extends AllowNames>(name: Name): boolean {
    return this.#allowedNames.has(guard.string(name) ? name : '');
  }
}
