// @angular-package/type.
import { are, is, ForEachCallback, ResultCallback } from '@angular-package/type';
// @angular-package/testing.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
/**
 * ValidationError
 */
import { ValidationError } from '@angular-package/error';
/**
 * Callback.
 */
import { Callback } from '../lib/callback.class';
// Constants.
import {
  TESTING_FALSE,
  TESTING_OBJECT,
  TESTING_TRUE,
} from '@angular-package/testing';
/**
 * Initialize Testing.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe(Callback.name, () => {
  let callback = new Callback('setCallback');
  beforeEach(() => (callback = new Callback('setCallback')));

  testing
    .it(`defined`, () =>
      toBe.defined(Callback).defined(callback).instance(callback, Callback)
    )

    .toBeClass(Callback)

    .toBeInstanceOfFunction(
      Callback.defineErrorCallback('my message', TESTING_TRUE),
      TESTING_TRUE,
      `Callback.defineErrorCallback('my message', true) returns a function `
    )

    .describe(`Callback.guard()`, () =>
      testing.toEqual(
        'method should have guard provided function',
        Callback.guard((result) => result),
        TESTING_TRUE
      )
    );

  //#region Callback static methods
  // Callback.defineErrorCallback()
  testing.describe(`.defineErrorCallback()`, () => {
    let stringErrorCallback: ResultCallback | undefined;
    const problem = 'Value is not a string';
    const fix = 'Provide proper type';
    testing.it(
      'defining properly with message of a string type that throws an error on `true`',
      () => {
        stringErrorCallback = Callback.defineErrorCallback(
          `The given value must be a string type`
        );
        toBe.function(stringErrorCallback);
        try {
          is.string(5, stringErrorCallback);
        } catch (e) {
          if (e instanceof ValidationError) {
            toBe.string(e.message);
            expect(e.message).toEqual(`The given value must be a string type`);
          }
        }
      }
    );
    testing.it(
      'defining properly with message of a string type that throws an error on `true`',
      () => {
        stringErrorCallback = Callback.defineErrorCallback({ problem, fix });
      }
    );
  });

  // Callback.defineForEachCallback()
  testing.describe(`.()`, () => {
    let forEachCallback: ForEachCallback;
    testing.it('defining `defineForEachCallback` properly', () => {
      forEachCallback =  Callback.defineForEachCallback(
        (result: boolean, payload) => {
          if (is.false(result)) {
            throw new ValidationError(`It's not a string type, got ${payload}`);
          }
        }
      );
      toBe.function(forEachCallback);
      try {
        are.string(5, '6', 7).forEach(forEachCallback);
      } catch (e) {
        if (e instanceof ValidationError) {
          toBe.string(e.message);
          console.log(e.message);
          expect(e.message).toEqual(`It's not a string type, got 5`);
        }
      }
    });
  });

  // Callback.defineResultCallback()
  testing.describe(`.defineResultCallback()`, () => {
    let stringCallback: ResultCallback | undefined;
    testing.it('defining `ResultCallback` properly', () => {
      stringCallback = Callback.defineResultCallback(
        (result: boolean, payload) => {
          if (is.false(result)) {
            throw new ValidationError(`It's not a string type, got ${payload}`);
          }
        }
      );
      toBe.function(stringCallback);
      try {
        is.string(5, stringCallback);
      } catch (e) {
        if (e instanceof ValidationError) {
          toBe.string(e.message);
          console.log(e.message);
          expect(e.message).toEqual(`It's not a string type, got 5`);
        }
      }
    });

    testing.it('defining `ResultCallback` not properly', () => {
      const falseCallback: any = false;
      // stringCallback = Callback.defineResultCallback(falseCallback);
      // toBe.not.function(stringCallback);
    });
  });

  // Callback.guard()
  testing.describe(`.guard()`, () => {
    const stringCallback: ResultCallback = (result: boolean, value: any) =>
      result;
    testing
      .it('guards properly with true', () =>
        toBe.true(Callback.guard(stringCallback))
      )
      .it('guards properly with false', () =>
        toBe.false(Callback.guard(TESTING_OBJECT as any))
      );
  });

  // Callback.isCallback()
  testing.describe(`.isCallback()`, () =>
    testing
      .toEqual(
        'method should have checked instance in `true` state',
        Callback.isCallback(callback),
        TESTING_TRUE
      )
      .toEqual(
        'method should have checked instance in `false` state',
        Callback.isCallback(new Object()),
        TESTING_FALSE
      )
  );
  //#endregion

  // Constructor
  testing.describe(`constructor()`, () => {
    testing.describe(`properly instantiate`, () => {
      const callbacks = new Callback('isString', 'isNumber');
      testing.it('with allowedNames', () => {
        toBe
          .undefined(callbacks.getResultCallback('isString'))
          .undefined(callbacks.getResultCallback('isNumber'));

        callbacks
          .setResultCallback('isString', (result: boolean) => result)
          .setResultCallback('isNumber', (result: boolean) => result);
        toBe
          .function(callbacks.getResultCallback('isString'))
          .function(callbacks.getResultCallback('isNumber'));
      });

      testing.it('and cannot set function with not allowed `firstName`', () => {
        const storageName: any = 'firstName';
        callbacks.setResultCallback(storageName, (result) => result);
        toBe.undefined(callbacks.getResultCallback(storageName));
      });
    });
  });

  //#region Callback public methods
  testing.describe(`.prototype.getCallback()`, () => {
    try {
      is.string(5, callback.getResultCallback('setCallback'));
    } catch (e) {
      if (e instanceof ValidationError) {
        toBe.string(e.message);
        expect(e.message).toEqual('The given value must be a string type');
      }
    }
  });

  testing.describe(`.prototype.setErrorCallback()`, () => {
    const message = 'This is test error';
    testing.it('properly working with message of a string type', () => {
      callback.setErrorCallback('setCallback', message, false);
      toBe.function(callback.getResultCallback('setCallback'));
      try {
        is.string(5, callback.getResultCallback('setCallback'));
      } catch (e) {
        if (e instanceof ValidationError) {
          expect(e.message).toEqual(message);
        }
      }
    });

    testing.it('properly working with message of an object', () => {
      const problem = 'This is test error';
      const fix = 'No fix for this error';
      callback.setErrorCallback(
        'setCallback',
        {
          problem,
          fix,
        },
        true
      );
      toBe.function(callback.getResultCallback('setCallback'));
      try {
        is.string('5', callback.getResultCallback('setCallback'));
      } catch (e) {
        if (e instanceof ValidationError) {
          expect(e.fix).toEqual('No fix for this error');
          expect(e.problem).toEqual('This is test error');
          expect(e.message).toEqual(
            ValidationError.template
              .replace('[problem]', problem)
              .replace('[fix]', fix)
          );
        }
      }
    });
  });

  testing.describe(`.prototype.setResultCallback()`, () => {
    testing.it(
      'should properly sets the callback function under the `setCallback` name',
      () => {
        toBe.undefined(callback.getResultCallback('setCallback'));
        callback.setResultCallback(
          'setCallback',
          (result: boolean, value: any) => {
            if (is.false(result)) {
              throw new ValidationError(
                'The given value must be a string type'
              );
            }
          }
        );
        toBe.function(callback.getResultCallback('setCallback'));
      }
    );
  });

  //#endregion
});
