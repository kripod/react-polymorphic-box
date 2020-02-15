/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

import { Box, PolymorphicComponentProps } from '.';

// Component-specific props should be specified separately
export interface HeadingOwnProps {
  color?: string;
}

// Merge own props with others inherited from the underlying element type
export type HeadingProps<
  E extends React.ElementType
> = PolymorphicComponentProps<E, HeadingOwnProps>;

// An HTML tag or a different React component can be rendered by default
const defaultElement = 'h2';

export function Heading<E extends React.ElementType = typeof defaultElement>({
  color,
  style,
  ...restProps
}: HeadingProps<E>): JSX.Element {
  // The `as` prop may be overridden by the passed props
  return <Box as={defaultElement} style={{ color, ...style }} {...restProps} />;
}

export const HeadingWithRef = React.forwardRef(
  <E extends React.ElementType = typeof defaultElement>(
    { ref, color, style, ...restProps }: HeadingProps<E>,
    innerRef: typeof ref,
  ) => {
    return (
      <Box
        ref={innerRef}
        as={defaultElement}
        style={{ color, ...style }}
        {...restProps}
      />
    );
  },
) as <E extends React.ElementType = typeof defaultElement>(
  props: HeadingProps<E>,
) => JSX.Element;

function App() {
  return (
    <Box></Box>
  );
}

App();
