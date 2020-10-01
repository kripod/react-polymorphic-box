/* eslint-disable @typescript-eslint/no-explicit-any */
// Source: https://github.com/chakra-ui/chakra-ui/blob/develop/packages/system/src/forward-ref.tsx
type As = string | React.ComponentType<any>;

export type PropsOf<T extends As> = T extends keyof JSX.IntrinsicElements
	? JSX.IntrinsicElements[T]
	: T extends React.JSXElementConstructor<any>
	? JSX.LibraryManagedAttributes<T, React.ComponentPropsWithRef<T>>
	: never;
