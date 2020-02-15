import { BoxProps } from './Box';

export { Box } from './Box';

export type PolymorphicComponentProps<E extends React.ElementType, P> = P &
  BoxProps<E>;
