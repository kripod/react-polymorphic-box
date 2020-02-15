// Source: https://github.com/emotion-js/emotion/blob/master/packages/styled-base/types/helper.d.ts
export type PropsOf<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  E extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<E, React.ComponentPropsWithRef<E>>;
