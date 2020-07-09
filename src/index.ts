import { BoxProps } from './Box';

export { Box } from './Box';

export type PolymorphicComponentProps<E extends React.ElementType, P> = P &
  BoxProps<E>;

export type PolymorphicComponent<
  P,
  D extends React.ElementType = 'div'
> = React.ComponentType<PolymorphicComponentProps<D, P>>;
