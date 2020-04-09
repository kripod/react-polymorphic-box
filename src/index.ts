import { BoxProps } from './Box';

export { Box } from './Box';

export type PolymorphicComponentProps<E extends React.ElementType, P> = P &
  BoxProps<E>;

export type PolymorphicComponent<P, D extends React.ElementType = 'div'> = <
  E extends React.ElementType = D
>(
  props: PolymorphicComponentProps<E, P>,
) => JSX.Element;
