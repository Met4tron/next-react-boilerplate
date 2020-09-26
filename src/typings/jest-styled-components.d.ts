/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
declare global {
  namespace jest {
    interface AsymmetricMatcher {
      $$typeof: symbol;
      sample?: string | RegExp | object | Array<any> | Function;
    }

    type Value = string | number | RegExp | AsymmetricMatcher | undefined;

    interface Options {
      media?: string;
      media?: string;
      modifier?: string;
      modifier?: string;
      supports?: string;
      supports?: string;
    }

    interface Matchers<R, T> {
      toHaveStyleRule(property: string, value?: Value, options?: Options): R;
      toHaveStyleRule(property: string, value?: Value, options?: Options): R;
    }
  }
}
