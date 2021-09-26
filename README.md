# Packages

Useful and simple to use packages based on the [angular.io][angulario].

| Package                              | Description                                            | Status |
| :----------------------------------- | :----------------------------------------------------- | -----: |
| [callback][callback-github-readme]   | Manages the callback [function][js-function].          | [![npm version][callback-npm-badge-png]][callback-npm-badge] |
| [change-detection][cd-github-readme] | Improves application performance.                      | [![npm version][cd-npm-badge-png]][cd-npm-badge] |
| [component-loader][cl-github-readme] | Handles dynamic loading components.                    | [![npm version][cl-npm-badge-png]][cl-npm-badge] |
| [core][core-github-readme]           | Core features.                                         | [![npm version][core-npm-badge-png]][core-npm-badge] |
| [error][error-github-readme]         | Manages an [Error][js-error].                          | [![npm version][error-npm-badge-png]][error-npm-badge] |
| [prism][prism-github-readme]         | [Prism][prism-js] highlighter module.                  | [![npm version][prism-npm-badge-png]][prism-npm-badge] |
| [property][property-github-readme]   | Handles object properties.                             | [![npm version][property-npm-badge-png]][property-npm-badge] |
| [reactive][reactive-github-readme]   | Automatize the process of creating some rxjs features. | [![npm version][reactive-npm-badge-png]][reactive-npm-badge] |
| [testing][testing-github-readme]     | Support for testing other packages.                    | [![npm version][testing-npm-badge-png]][testing-npm-badge] |
| [type][type-github-readme]           | Common types, type guards, and type checkers.          | [![npm version][type-npm-badge-png]][type-npm-badge] |
| [ui][ui-github-readme]               | User interface.                                        | *In Progress* |

> Click on the package name to visit its [GitHub](https://github.com/) page.

## angular-package/callback

Manages the callback [`function`][js-function].

<!-- npm badge -->
[![npm version][callback-npm-badge-svg]][callback-npm-badge]
<!-- GitHub badges -->
[![GitHub issues][callback-badge-issues]][callback-issues]
[![GitHub forks][callback-badge-forks]][callback-forks]
[![GitHub stars][callback-badge-stars]][callback-stars]
[![GitHub license][callback-badge-license]][callback-license]
<!-- Sponsors badges -->
[![GitHub sponsors][github-badge-sponsor]][github-sponsor-link]
[![Support me on Patreon][patreon-badge]][patreon-link]

----

## Table of contents

* [Basic concepts](#basic-concepts)
* [Skeleton](#skeleton)
* [Installation](#installation)
* [Api](#api)
* [`Callback`](#callback)
* [Interface](#interface)
* [Type](#type)
* [Changelog](#changelog)
* [Git](#git)
  * [Commit](#commit)
  * [Versioning](#versioning)
* [License](#license)

----

<br>

## Basic concepts

Checks
> It's to check the provided value to be **the same** as **expected**.

Type guard (constrain)
> Constrains the parameter type to **not let** input **unexpected** value in the **code editor**.

Guards
> It's a **combination** of both above, **constrains** the type of the parameter in the **code editor**, and checks its provided argument.

Defines
> Returns defined value from a method of an object.  
> Defines new value in an object and returns a defined value.  

Gets
> Returns a value from an object.

Sets
> Adds or updates an element with a specified key and a value to an object and returns an object.  

<br>

## Skeleton

This package was built by the [library skeleton][skeleton] which was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.5.

Copy this package to the `packages/callback` folder of the [library skeleton][skeleton] then run the commands below.

### Build

Run `ng build callback` to build the package. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test callback` to execute the unit tests via [Karma](https://karma-runner.github.io).

<br>

## Installation

Install `@angular-package/callback` package with command:

```bash
npm i @angular-package/callback --save
```

<br>

## Api

```typescript
import {
  // Class.
  Callback,

  // Interface.
  CallbackPayload,

  // Type.
  ResultCallback
} from '@angular-package/callback';
```

<br>

## `Callback`

Manages the callback [`function`][js-function] of a [`ResultCallback`][package-type-resultcallback] type.

<br>

**Static methods:**

| Callback.                                                 | Description |
| :-------------------------------------------------------- | :---------- |
| [`defineResultCallback()`](#callbackdefineresultcallback) | Defines the [`function`][js-function] of the [`ResultCallback`][package-type-resultcallback] type that contains a [`ResultHandler`](#resulthandler) function to handle the `result`, `value`, and optional `payload` without returning the `result`. |
| [`defineErrorCallback()`](#callbackdefineerrorcallback)   | Defines a callback [`function`][js-function] of [`ResultCallback`][package-type-resultcallback] type to throw [`ValidationError`][error-validationerror] with a specified message on a state from the `throwOnState`. |
| [`defineForEachCallback()`](#defineforeachcallback)       | Defines a callback [`function`][js-function] of [`ForEachCallback`][package-type-foreachcallback] type. |
| [`guard()`](#callbackguard)                               | Guards the provided `resultCallback` to be [`ResultCallback`][package-type-resultcallback] type. |
| [`isCallback()`](#callbackiscallback)                     | Checks if the provided `value` is an instance of [`Callback`](#callback) with optional indicating allowed names under which callback functions can be stored. |

**Constructor:**

| Constructor                           | Description |
| :------------------------------------ | :---------- |
| [`Callback()`](#callback-constructor) | Initialize an instance of a [`Callback`](#callback) with the allowed names under which callback functions can be stored. |

**Instance methods:**

| Callback.prototype.                                   | Description |
| :---------------------------------------------------- | :---------- |
| [`getCallback()`][callback-getcallback]               | Gets from the storage specified by-name callback [`function`][js-function] of a [`ResultCallback`][package-type-resultcallback] type. |
| [`setErrorCallback()`][callback-seterrorcallback]     | Sets a callback [`function`][js-function] of a [`ResultCallback`][package-type-resultcallback] type that throws [`ValidationError`][error-validationerror] with a specified message on a state from the provided `throwOnState` to the storage under the given allowed name restricted by `AllowNames`. |
| [`setForEachCallback()`][callback-setforeachcallback] | Sets a callback  of a [`ResultCallback`][package-type-resultcallback] type to the storage under the given allowed `name`, which is restricted by `AllowNames`. |
| [`setResultCallback()`][callback-setresultcallback]   | Sets a callback  of a [`ResultCallback`][package-type-resultcallback] type to the storage under the given allowed `name`, which is restricted by `AllowNames`. |

[callback-getcallback]: #callbackprototypegetcallback
[callback-seterrorcallback]: #callbackprototypeseterrorcallback
[callback-setforeachcallback]: #callbackprototypesetforeachcallback
[callback-setresultcallback]: #callbackprototypesetresultcallback

<br>

### `Callback` static methods

#### `Callback.defineResultCallback()`

Defines the [`function`][js-function] of a [`ResultCallback`][package-type-resultcallback] type that contains a [`ResultHandler`](#resulthandler) function to handle the `result`, `value`, and optional `payload`.

```typescript
static defineResultCallback<Value = any, Payload extends object = object>(
  resultHandler: ResultHandler<Value, Payload>,
  defaultPayload?: Payload
): ResultCallback<Value, Payload> {
  return (result: boolean, value: Value, payload = defaultPayload) => (
    resultHandler(result, value, payload), result
  );
}
```

**Generic type variables:**

| Name                     | Description |
| :----------------------- | :---------- |
| `Payload extends object` | The shape of the optional payload parameter of the [`ResultCallback`][package-type-resultcallback] and [`ResultHandler`](#resulthandler) function, which is constrained by the [`object`][js-object] type. Its value can be captured from a type of the provided `capturePayload` optional parameter. |

**Parameters:**

| Name: type                              | Description |
| :-------------------------------------- | :---------- |
| `resultHandler: ResultHandler<Payload>` | The [`function`][js-function] that is guarded by the [`ResultHandler`](#resulthandler) type to handle the result and optional payload of the [`ResultCallback`][package-type-resultcallback] function. |
| `capturePayload?: Payload`              | An optional [`object`][js-object] of generic type `Payload` that is used only to capture the value by the generic type variable `Payload`. |

**Returns:**

| Returns                   | Type       | Description  |
| :------------------------ | :--------: | :----------- |
| `ResultCallback<Payload>` | `Function` | The **return type** is a [`function`][js-function] of [`ResultCallback`][package-type-resultcallback]. |

The **return value** is a [`function`][js-function] of a [`ResultCallback`][package-type-resultcallback] type that contains a [`function`][js-function] of [`ResultHandler`](#resulthandler).

**Usage:**

```typescript
// Example usage.
import { Callback } from '@angular-package/callback';
import { is } from '@angular-package/type';

const stringCallback = Callback.defineResultCallback(
  (result: boolean, payload) => {
    if (is.false(result)) {
      console.log(`Something went wrong`, payload);
    }
  }
);

// Returns in console 'Something went wrong' 5
is.string(5, stringCallback);
```

```typescript
// Another usage example.
import { Callback, ResultCallback } from '@angular-package/callback';

type Person = { id?: number; firstName?: string; age?: number };

const isPerson = (value: Person, callback: ResultCallback<Person>): any =>
  callback(typeof value === 'object', value);

const personCallback = Callback.defineResultCallback(
  (result: boolean, payload) => {
    if (payload !== undefined) {
      console.log(payload);
    }
    return result;
  }
);

// Console returns { firstName: 'My name' }
isPerson({ firstName: 'My name' }, personCallback);
```

<br>

#### `Callback.defineErrorCallback()`

Defines [`function`][js-function] of [`ResultCallback`][package-type-resultcallback] type to throw [`ValidationError`][error-validationerror] with a specified message on a state from `throwOnState`. Provided `payload` from defined callback function of [`ResultCallback`][package-type-resultcallback] is being passed to a thrown error of [`ValidationError`][error-validationerror].

```typescript
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
```

**Generic type variables:**

| Name                     | Description |
| :----------------------- | :---------- |
| `Payload extends object` | The shape of the optional payload parameter of the [`ResultCallback`][package-type-resultcallback] function, which is constrained by the [`object`][js-object] type. Its value can be captured from a type of the provided `capturePayload` optional parameter. |

**Parameters:**

| Name: type                        | Description |
| :-------------------------------- | :---------- |
| `message: string \| ErrorMessage` | The message of [`string`][js-string] type or [`ErrorMessage`](#errormessage) interface to throw with an error of [`ValidationError`][error-validationerror]. |
| `throwOnState: boolean`           | A state of [`boolean`][js-boolean] type on which an error of [`ValidationError`][error-validationerror] should be thrown. By default, it's set to `false`. |
| `capturePayload?: Payload`        | An optional [`object`][js-object] of generic type `Payload` that is used only to capture the value by the generic type variable `Payload`. |

**Returns:**

| Returns                   | Type       | Description  |
| :------------------------ | :--------: | :----------- |
| `ResultCallback<Payload>` | `Function` | The **return type** is a [`function`][js-function] of a [`ResultCallback`][package-type-resultcallback] type. |

The **return value** is a [`function`][js-function] of a [`ResultCallback`][package-type-resultcallback] type that throws a [`ValidationError`][error-validationerror].

**Usage:**

```typescript
// Example usage.
import { Callback } from '@angular-package/callback';
import { is } from '@angular-package/type';

const stringCallback = Callback.defineErrorCallback('Something went wrong');
is.string(5, stringCallback); // Throws ValidationError: Something went wrong
```

```typescript
import { Callback, ResultCallback } from '@angular-package/callback';

type Person = { id?: number; firstName?: string; age?: number };

const isPerson = (value: Person, callback: ResultCallback<Person>): any =>
  callback(typeof value === 'object', value);

const personCallback = Callback.defineErrorCallback('It is not a person', true);

try {
  isPerson({ id: 1, firstName: 'name', age: 27 }, personCallback);
} catch (e) {
  // Console returns {id: 1, firstName: "name", age: 27}
  console.log(e.payload);
}
```

<br>

#### `Callback.guard()`

Guards the provided `resultCallback` to be [`ResultCallback`][package-type-resultcallback] type.

```typescript
static guard<Payload extends object>(
  resultCallback: ResultCallback<Payload>
): resultCallback is ResultCallback<Payload> {
  return guard.function(resultCallback);
}
```

**Generic type variables:**

| Name                     | Description |
| :----------------------- | :---------- |
| `Payload extends object` | The shape of the optional payload parameter of the [`ResultCallback`][package-type-resultcallback] function, which is constrained by the [`object`][js-object] type. |

**Parameters:**

| Name: type                                | Description |
| :---------------------------------------- | :---------- |
| `resultCallback: ResultCallback<Payload>` | The [`function`][js-function] of [`ResultCallback`][package-type-resultcallback] type with the shape of payload from the generic type variable `Payload` to guard. |

**Returns:**

| Returns                                     | Type      | Description  |
| :------------------------------------------ | :-------: | :----------- |
| `resultCallback is ResultCallback<Payload>` | `boolean` | The **return type** is [`boolean`][js-boolean] as the result of its statement that indicates the provided `resultCallback` is a [`function`][js-function] of a [`ResultCallback`][package-type-resultcallback] type with the shape of payload from the generic type variable `Payload`. |

The **return value** is a `boolean` indicating whether the provided `resultCallback` parameter is a [`function`][js-function].

**Usage:**

```typescript
// Example usage.
import { Callback } from '@angular-package/callback';

Callback.guard(result => result); // Returns `true`.
Callback.guard({} as any); // Returns `false`.
```

<br>

#### `Callback.isCallback()`

Checks if the provided `value` is an instance of [`Callback`](#callback) with optional indicating allowed names under which callback functions can be stored.

```typescript
static isCallback<AllowNames extends string>(
  value: any,
  ...allowNames: AllowNames[]
): value is Callback<AllowNames> {
  return is.instance(value, Callback);
}
```

**Generic type variables:**

| Name                        | Description |
| :-------------------------- | :---------- |
| `AllowNames extends string` | An optional generic type variable of `AllowNames` name that is constrained by the [`string`][js-string] type and is used to indicate allowed names under which callback functions can be stored for the return type `value is Callback<AllowNames>`. Its value can be captured from the provided `allowNames` rest parameter. |

**Parameters:**

| Name: type                    | Description |
| :---------------------------- | :---------- |
| `value: any`                  | The `value` of any type to check |
| `...allowNames: AllowNames[]` | A rest parameter of `AllowNames` that is used only to capture the value by the generic type variable `AllowNames` to indicate allowed names for the `Callback<AllowNames>` return type. |

**Returns:**

| Returns                         | Type      | Description |
| :------------------------------ | :-------: | :---------- |
| `value is Callback<AllowNames>` | `boolean` | The **return type** is `boolean` as the result of its statement that indicates the provided `value` is  a [`Callback`](#callback) with allowed names from the provided `allowNames` parameter or generic type variable `AllowNames`. |

The **return value** is a `boolean` indicating whether the `value` is an instance of [`Callback`](#callback) .

**Usage:**

```typescript
// Example usage.
import { Callback } from '@angular-package/callback';

Callback.isCallback({}); // Returns `false`
Callback.isCallback(new Callback()); // Returns `true`

const callback = new Callback('one', 'two', 'three');
if (Callback.isCallback(callback)) {
  callback.setCallback('one', result => result); // There's no hint on `name` parameter about allowed names.
}
if (Callback.isCallback(callback, 'one', 'two')) {
  callback.setCallback('one', result => result); // There is a hint from the provided `allowNames` parameter of the `isCallback()` method.
}
```

<br>

### `Callback` constructor

----

#### `Callback()`

Initialize an instance of a [`Callback`](#callback) with the allowed names under which callback functions can be stored.

```typescript
new Callback<AllowNames extends string>(...allowNames: AllowNames[]) {
  this.#allowedNames = guard.array(allowNames)
    ? new Set(allowNames)
    : this.#allowedNames;
}
```

**Generic type variables:**

| Name                          | Description |
| :---------------------------- | :---------- |
| `AllowedNames extends string` | A generic type variable `AllowNames` that is constrained by the [`string`][js-string] type and is used to **restrict** allowed names under which callback functions can be stored. By default, its value is captured from the provided `allowNames` rest parameter. |

**Parameters:**

| Name: type                   | Description |
| :--------------------------- | :---------- |
| `allowNames: AllowedNames[]` | A rest parameter of a [`string`][js-string] type allowed names under which callback functions can be stored. Only those names given by this parameter are being checked by the `isNameAllowed()` private method. |

**Returns:**

The **return value** is new instance of a [`Callback`](#callback).

**Usage:**

```typescript
// Example usage.
import { Callback } from '@angular-package/callback';
/**
 * Initialize `Callback`.
 */
const callback = new Callback('set', 'define');
```

<br>

### `Callback` instance methods

----

#### `Callback.prototype.getCallback()`

Gets from the storage specified by-name callback [`function`][js-function] of a [`ResultCallback`][package-type-resultcallback] type.

```typescript
public getCallback<
  Payload extends object,
  Name extends AllowNames = AllowNames
>(
  name: Name,
  capturePayload?: Payload
): Pick<CallbackStorage<Payload>, Name>[Name] {
  return this.#storage.get(name);
}
```

**Generic type variables:**

| Name                      | Description |
| :------------------------ | :---------- |
| `Payload extends object`  | The shape of the optional payload parameter of the [`ResultCallback`][package-type-resultcallback] function, which is constrained by the [`object`][js-object] type. Its value can be captured from a type of the provided `capturePayload` optional parameter. |
| `Name extends AllowNames` | A generic type variable `Name` constrained by the `AllowNames` indicates the name under which callback [`function`][js-function] is picked from the storage. It is linked with the return type `Pick<CallbackStorage, Name>[Name]` that refers exactly to the type, which is [`ResultCallback`][package-type-resultcallback] of the callback [`function`][js-function] picked from the storage by `Name`. By default, its value is captured from the provided `name`. |

**Parameters:**

| Name: type                 | Description |
| :------------------------- | :---------- |
| `name: Name`               | A [`string`][js-string] type name that is restricted by the `AllowNames` to pick stored callback [`function`][js-function]. |
| `capturePayload?: Payload` | An optional [`object`][js-object] of generic type `Payload` that is used only to capture the value by the generic type variable `Payload`. |

**Returns:**

| Returns                             | Type       | Description |
| :---------------------------------- | :--------: | :---------- |
| `Pick<CallbackStorage, Name>[Name]` | `function` | The **return type** is a [`ResultCallback`][package-type-resultcallback] [`function`][js-function] that is picked from the `CallbackStorage` by using `Name`. |

The **return value** is the callback `function` of a [`ResultCallback`][package-type-resultcallback] type picked from the storage.

**Usage:**

```typescript
// Example usage.
import { Callback } from '@angular-package/callback';
/**
 * Initialize `Callback`.
 */
const callback = new Callback('firstName');

callback
  .setCallback('firstName', result => result) // Set the callback function under the given name.
  .getCallback('firstName'); // Get the function stored under the given name.
```

```typescript
// Generic type variable payload example usage.
import { Callback } from '@angular-package/callback';
/**
 * Initialize `Callback`.
 */
const callbackInstance = new Callback('firstName');

// Type for the `Payload`.
type CustomPayload = { id: number, name: string };

// Set the callback function under the given name.
callbackInstance.setResultCallback<CustomPayload>('firstName', (result, payload) => {
  if (payload) {
    // It handles two properties from the payload.
    // payload.id
    // payload.name
  }
});

// Get the function stored under the given name with the `CustomPayload` type.
const firstNameCallback = callbackInstance.getCallback<CustomPayload>('firstName');

// Use the defined callback function with a defined `CustomPayload`.
firstNameCallback(false, { id: 5, name: 'there is no name', age: 1 }); // TypeError because of the `age`
```

```typescript
// Captured payload example usage.
import { Callback } from '@angular-package/callback';
/**
 * Initialize `Callback`.
 */
const callbackInstance = new Callback('firstName');

// Constant from which is going to be captured type for the `Payload`.
const payLoadToCapture = { id: 1, name: '' };

// Set the callback function under the given name.
callbackInstance.setResultCallback(
  'firstName',
  (result, payload) => {
    if (payload) {
      // It handles two properties from the payload.
      // payload.id
      // payload.name
    }
  },
  payLoadToCapture
);

// Get the function stored under the given name.
const firstNameCallback = callbackInstance.getCallback(
  'firstName',
  payLoadToCapture
);

// Use the defined callback with a captured type of payload.
firstNameCallback(false, { id: 5, name: 'there is no name' });
```

<br>

#### `Callback.prototype.setErrorCallback`

Sets a [`function`][js-function] of a [`ResultCallback`][package-type-resultcallback] type to the storage under the given allowed name with the given error message to throw on the specified state from the `throwOnState`.

```typescript
public setErrorCallback<Name extends AllowNames>(
  name: Name,
  message: string | ErrorMessage,
  throwOnState: boolean = false
): this {
  this.setCallback(name, Callback.defineErrorCallback(message, throwOnState));
  return this;
}
```

**Generic type variables:**

| Name                      | Description |
| :------------------------ | :---------- |
| `Name extends AllowNames` | A generic `Name` variable constrained by the `AllowNames` indicates the name under which callback [`function`][js-function] is stored. By default, its value is captured from the provided `name`. |

**Parameters:**

| Name: type                        | Description |
| :-------------------------------- | :---------- |
| `name: Name`                      | A `string` type name that is restricted by the `AllowNames` under which the [`function`][js-function] is stored. The allowed status of the provided `name` is checked by the private method `isNameAllowed()`. |
| `message: string \| ErrorMessage` | The message of string type or [`ErrorMessage`](#errormessage) interface, to throw with an error of [`ValidationError`][error-validationerror]. |
| `throwOnState: boolean`           | A state of [`boolean`][js-boolean] type on which an error of [`ValidationError`][error-validationerror] should be thrown. By default, it's set to `false`. |

**Returns:**

| Returns | Type     | Description |
| :------ | :------: | :---------- |
| `this`  | `object` | The **return type** is an instance of `Callback` |

The **return value** is an instance of [`Callback`](#callback).

**Usage:**

```typescript
// Example usage.
import { Callback } from '@angular-package/callback';
/**
 * Initialize `Callback`.
 */
const callback = new Callback('firstName', 'lastName');

// Set the error callback function under the given name.
callback.setErrorCallback('lastName', 'LastName must be a string type', false);
```

<br>

#### `Callback.prototype.setResultCallback()`

Sets a callback function of a [`ResultCallback`][package-type-resultcallback] type to the storage under the given allowed `name` restricted by `AllowNames`.

```typescript
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
```

**Generic type variables:**

| Name                      | Description |
| :------------------------ | :---------- |
| `Payload extends object`  | The shape of the optional payload parameter of the [`ResultCallback`][package-type-resultcallback] function, which is constrained by the [`object`][js-object] type. Its value can be captured from a type of the provided `capturePayload` optional parameter. |
| `Name extends AllowNames` | A generic type variable `Name` constrained by the `AllowNames` indicates the name under which callback [`function`][js-function] is stored. By default, its value is captured from the provided `name`. |

**Parameters:**

| Name: type                     | Description |
| :----------------------------- | :---------- |
| `name: Name`                   | A `string` type name that is restricted by the `AllowNames` under which the [`function`][js-function] is stored. The allowed status of the provided `name` is checked by the private method `isNameAllowed()`. |
| `resultHandler: ResultHandler` | The [`function`][js-function] of [`ResultHandler`](#resulthandler) to handle the result of the [`ResultCallback`][package-type-resultcallback] [`function`][js-function] before its result returns. |

**Returns:**

| Returns | Type     | Description |
| :------ | :------: | :---------- |
| `this`  | `object` | The **return type** is an instance of `Callback`. |

The **return value** is an instance of [`Callback`](#callback).

**Usage:**

```typescript
// Example usage.
import { Callback } from '@angular-package/callback';
/**
 * Initialize `Callback`.
 */
const callback = new Callback('firstName');

// Set the callback function under the given name.
callback.setCallback('firstName', result => result) 
```

```typescript
// Generic type variable `Payload` example usage.
import { Callback } from '@angular-package/callback';
/**
 * Initialize `Callback`.
 */
const callbackInstance = new Callback('firstName');

// Type for the `Payload`.
type CustomPayload = { id: number; name: string };

// Set the callback function under the given name.
callbackInstance.setResultCallback<CustomPayload>(
  'firstName',
  (result, payload) => {
    if (payload) {
      // It handles two properties from the payload.
      // payload.id
      // payload.name
    }
  }
);
```

```typescript
// Captured `Payload` example usage.
import { Callback } from '@angular-package/callback';
/**
 * Initialize `Callback`.
 */
const callbackInstance = new Callback('firstName');

// Constant from which is going to be captured type for the `Payload`.
const payLoadToCapture = { id: 1, name: '' };

// Set the callback function under the given name.
callbackInstance.setResultCallback(
  'firstName',
  (result, payload) => {
    if (payload) {
      // It handles two properties from the payload.
      // payload.id
      // payload.name
    }
  },
  payLoadToCapture
);

```

**Full usage example:**

```typescript
// Generic type variable `Payload` example usage.
import { Callback } from '@angular-package/callback';
/**
 * Initialize `Callback`.
 */
const callbackInstance = new Callback('firstName');

// Type for the `Payload`.
type CustomPayload = { id: number, name: string };

// Set the callback function under the given name.
callbackInstance.setResultCallback<CustomPayload>('firstName', (result, payload) => {
  if (payload) {
    // It handles two properties from the payload.
    // payload.id
    // payload.name
  }
});

// Get the function stored under the given name with the `CustomPayload` type.
const firstNameCallback = callbackInstance.getCallback<CustomPayload>('firstName');

// Use the defined callback function with a defined `CustomPayload`.
firstNameCallback(false, { id: 5, name: 'there is no name', age: 1 }); // TypeError because of the `age`
```

```typescript
// Captured `Payload` example usage.
import { Callback } from '@angular-package/callback';
/**
 * Initialize `Callback`.
 */
const callbackInstance = new Callback('firstName');

// Constant from which is going to be captured type for the `Payload`.
const payLoadToCapture = { id: 1, name: '' };

// Set the callback function under the given name.
callbackInstance.setResultCallback(
  'firstName',
  (result, payload) => {
    if (payload) {
      // It handles two properties from the payload.
      // payload.id
      // payload.name
    }
  },
  payLoadToCapture
);

// Get the function stored under the given name.
const firstNameCallback = callbackInstance.getCallback(
  'firstName',
  payLoadToCapture
);

// Use the defined callback with a captured type of `Payload`.
firstNameCallback(false, { id: 5, name: 'there is no name' });
```

<br>

## Type

#### `ResultHandler`

![update]

**Internal** function to handle the arguments of the [`ResultCallback`][package-type-resultcallback] function before its result return.

```typescript
type ResultHandler<Payload extends object = any> = (
  result: boolean,
  payload?: Payload
) => void;
```

<br>

## Changelog

The **changelog** of this package is based on [*keep a changelog*](https://keepachangelog.com/en/1.0.0/). To read it, click on the [CHANGELOG.md](https://github.com/angular-package/callback/blob/main/CHANGELOG.md) link.

> A changelog is a file which contains a curated, chronologically ordered list of notable changes for each version of a project. - [*keep a changelog*](https://keepachangelog.com/en/1.0.0/)

<br>

## GIT

### Commit

* [AngularJS Git Commit Message Conventions][git-commit-angular]
* [Karma Git Commit Msg][git-commit-karma]
* [Conventional Commits][git-commit-conventional]

### Versioning

[Semantic Versioning 2.0.0][git-semver]

**Given a version number MAJOR.MINOR.PATCH, increment the:**

* MAJOR version when you make incompatible API changes,
* MINOR version when you add functionality in a backwards-compatible manner, and
* PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?

> The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

> If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © angular-package ([license][callback-license])

<!-- Funding -->
[github-badge-sponsor]: https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&link=https://github.com/sponsors/angular-package
[github-sponsor-link]: https://github.com/sponsors/angular-package
[patreon-badge]: https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3Dsciborrudnicki%26type%3Dpatrons&style=flat
[patreon-link]: https://patreon.com/sciborrudnicki

[angulario]: https://angular.io
[skeleton]: https://github.com/angular-package/skeleton

<!-- Update status -->
[experimental]: https://img.shields.io/badge/-experimental-orange
[fix]: https://img.shields.io/badge/-fix-red
[new]: https://img.shields.io/badge/-new-green
[update]: https://img.shields.io/badge/-update-red

<!-- GIT -->
[git-semver]: http://semver.org/

<!-- GIT: commit -->
[git-commit-angular]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[git-commit-karma]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[git-commit-conventional]: https://www.conventionalcommits.org/en/v1.0.0/

<!-- This package: callback  -->
  <!-- GitHub: badges -->
  [callback-badge-issues]: https://img.shields.io/github/issues/angular-package/callback
  [callback-badge-forks]: https://img.shields.io/github/forks/angular-package/callback
  [callback-badge-stars]: https://img.shields.io/github/stars/angular-package/callback
  [callback-badge-license]: https://img.shields.io/github/license/angular-package/callback
  <!-- GitHub: badges links -->
  [callback-issues]: https://github.com/angular-package/callback/issues
  [callback-forks]: https://github.com/angular-package/callback/network
  [callback-license]: https://github.com/angular-package/callback/blob/master/LICENSE
  [callback-stars]: https://github.com/angular-package/callback/stargazers

<!-- This package -->

<!-- Package: callback -->
  <!-- npm -->
  [callback-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fcallback.svg
  [callback-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fcallback.png
  [callback-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fcallback
  [callback-npm-readme]: https://www.npmjs.com/package/@angular-package/callback#readme

  <!-- GitHub -->
  [callback-github-readme]: https://github.com/angular-package/callback#readme

<!-- Package: change-detection -->
  <!-- npm -->
  [cd-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fchange-detection.svg
  [cd-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fchange-detection.png
  [cd-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fchange-detection
  [cd-npm-readme]: https://www.npmjs.com/package/@angular-package/change-detection#readme

  <!-- GitHub -->
  [cd-github-readme]: https://github.com/angular-package/change-detection#readme

<!-- Package: component-loader -->
  <!-- npm -->
  [cl-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fcomponent-loader.svg
  [cl-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fcomponent-loader.png
  [cl-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fcomponent-loader
  [cl-npm-readme]: https://www.npmjs.com/package/@angular-package/component-loader#readme

  <!-- GitHub -->
  [cl-github-readme]: https://github.com/angular-package/component-loader#readme

<!-- Package: core -->
  <!-- npm -->
  [core-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fcore.svg
  [core-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fcore.png
  [core-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fcore
  [core-npm-readme]: https://www.npmjs.com/package/@angular-package/core#readme

  <!-- GitHub -->
  [core-github-readme]: https://github.com/angular-package/core#readme

<!-- Package: error -->
  <!-- npm -->
  [error-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ferror.svg
  [error-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Ferror.png
  [error-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ferror
  [error-npm-readme]: https://www.npmjs.com/package/@angular-package/error#readme

  <!-- GitHub -->
  [error-github-readme]: https://github.com/angular-package/error#readme

  <!-- error -->
  [error-validationerror]: https://github.com/angular-package/error#validationerror

<!-- Package: prism -->
  <!-- npm -->
  [prism-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fprism.svg
  [prism-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fprism.png
  [prism-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fprism
  [prism-npm-readme]: https://www.npmjs.com/package/@angular-package/prism#readme

  <!-- GitHub -->
  [prism-github-readme]: https://github.com/angular-package/prism#readme

<!-- Package: property -->
  <!-- npm -->
  [property-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fproperty.svg
  [property-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fproperty.png
  [property-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fproperty
  [property-npm-readme]: https://www.npmjs.com/package/@angular-package/property#readme

  <!-- GitHub -->
  [property-github-readme]: https://github.com/angular-package/property#readme

<!-- Package: reactive -->
  <!-- npm -->
  [reactive-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Freactive.svg
  [reactive-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Freactive.png
  [reactive-npm-badge]: https://badge.fury.io/js/%40angular-package%2Freactive
  [reactive-npm-readme]: https://www.npmjs.com/package/@angular-package/reactive#readme

  <!-- GitHub -->
  [reactive-github-readme]: https://github.com/angular-package/reactive#readme

<!-- Package: testing -->
  <!-- npm -->
  [testing-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ftesting.svg
  [testing-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Ftesting.png
  [testing-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ftesting
  [testing-npm-readme]: https://www.npmjs.com/package/@angular-package/testing#readme

  <!-- GitHub -->
  [testing-github-readme]: https://github.com/angular-package/testing#readme

<!-- Package: type -->
  <!-- npm -->
  [type-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ftype.svg
  [type-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Ftype.png
  [type-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ftype
  [type-npm-readme]: https://www.npmjs.com/package/@angular-package/type#readme

  <!-- GitHub -->
  [type-github-readme]: https://github.com/angular-package/type#readme

  [package-type-foreachcallback]: https://github.com/angular-package/type#foreachcallback
  [package-type-resultcallback]: https://github.com/angular-package/type#resultcallback
  [package-type-key]: https://github.com/angular-package/type#key

<!-- Package: ui -->
  <!-- npm -->
  [ui-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fui.svg
  [ui-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fui.svg
  [ui-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fui
  [ui-npm-readme]: https://www.npmjs.com/package/@angular-package/ui#readme

  <!-- GitHub -->
  [ui-github-readme]: https://github.com/angular-package/ui#readme

<!-- Angular -->
[angular-component-factory-resolver]: https://angular.io/api/core/ComponentFactoryResolver
[angular-view-container-ref]: https://angular.io/api/core/ViewContainerRef

<!-- Jasmine -->
[jasmine-describe]: https://jasmine.github.io/api/3.8/global.html#describe
[jasmine-expect]: https://jasmine.github.io/api/3.8/global.html#expect
[jasmine-it]: https://jasmine.github.io/api/3.8/global.html#it

<!-- Javascript  -->
[js-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[js-array-every]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
[js-array-some]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

[js-bigint]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
[js-bigintconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt

[js-boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[js-booleanconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean

[js-classes]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

[js-date]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

[js-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

[js-function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
[js-function-rest-parameter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

[js-getter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
[js-object-getownpropertydescriptor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
[js-object-getOwnpropertydescriptors]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors

[js-setter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set

[js-hasownproperty]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

[js-instanceof]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
[js-in-operator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in

[js-map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

[js-null]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
[js-number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[js-numberconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number

[js-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[js-object-define-property]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

[js-primitive]: https://developer.mozilla.org/en-US/docs/Glossary/Primitive
[js-promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

[js-rangeerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError
[js-referenceerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError
[js-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

[js-set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[js-storage]: https://developer.mozilla.org/en-US/docs/Web/API/Storage
[js-string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[js-stringconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String

[js-symbol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
[js-symbolconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol
[js-syntaxerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError

[js-typeerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError

[js-undefined]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
[js-urlerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError

[js-weakset]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet

<!-- Karma -->
[karma]: http://karma-runner.github.io/0.10/index.html

<!-- Prism -->
[prism-js]: https://prismjs.com/

<!-- Typescript -->
[ts-classes]: https://www.typescriptlang.org/docs/handbook/2/classes.html
[ts-function]: https://www.typescriptlang.org/docs/handbook/2/functions.html
[ts-interface]: https://www.typescriptlang.org/docs/handbook/interfaces.html#our-first-interface
