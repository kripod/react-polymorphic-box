# react-polymorphic-box

Building blocks for strongly typed polymorphic components in React.

[![npm](https://img.shields.io/npm/v/react-polymorphic-box)](https://www.npmjs.com/package/react-polymorphic-box)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/kripod/react-polymorphic-box.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/kripod/react-polymorphic-box/context:javascript)
[![Travis (.com)](https://img.shields.io/travis/com/kripod/react-polymorphic-box)](https://travis-ci.com/kripod/react-polymorphic-box)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](https://commitizen.github.io/cz-cli/)

<img src="./assets/demo.gif" alt="Animated demonstration of package capabilities" width="706">

## 💡 Motivation

Popularized [by Styled Components v4](https://medium.com/styled-components/announcing-styled-components-v4-better-faster-stronger-3fe1aba1a112), the `as` prop allows changing the HTML tag rendered by a component, e.g.:

```jsx
import { Box } from 'react-polymorphic-box';
import { Link } from 'react-router-dom';

<Box as="a" href="https://github.com/kripod">GitHub</Box>
<Box as={Link} to="/about">About</Box>
```

While this pattern has been encouraged by several libraries, typings had [lacked support for polymorphism](https://blog.andrewbran.ch/polymorphic-react-components/), missing benefits like:

- Automatic code completion, based on the value of the `as` prop
- Static type checking against the associated component's inferred props
- HTML element name validation

## 📚 Usage

A `Heading` component can demonstrate the effectiveness of polymorphism:

```jsx
<Heading color="rebeccapurple">Heading</Heading>
<Heading as="h3">Subheading</Heading>
```

Custom components like the previous one may utilize the package as shown below.

```tsx
import React from 'react';
import { Box, PolymorphicComponentProps } from 'react-polymorphic-box';

// Component-specific props should be specified separately
export interface HeadingOwnProps {
  color?: string;
}

// Merge own props with others inherited from the underlying element type
export type HeadingProps<
  E extends React.ElementType
> = PolymorphicComponentProps<E, HeadingOwnProps>;

export function Heading<E extends React.ElementType = typeof defaultElement>({
  // An HTML tag or a different React component can be rendered by default
  as = 'h2',
  color,
  style,
  ...restProps
}: HeadingProps<E>): JSX.Element {
  // The `as` prop may be overridden by the passed props
  return <Box as={as} style={{ color, ...style }} {...restProps} />;
}
```

### Forwarding Refs

Library authors should consider encapsulating reusable components, [passing a ref](https://reactjs.org/docs/forwarding-refs.html) through each of them:

```tsx
import React from 'react';
import { Box } from 'react-polymorphic-box';

export const Heading = React.forwardRef(
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
```
