import * as React from 'react';

import { PropsOf } from './utils';

export interface BoxOwnProps<E extends React.ElementType = React.ElementType> {
  as?: E;
}

export type BoxProps<E extends React.ElementType> = BoxOwnProps<E> &
  Omit<PropsOf<E>, keyof BoxOwnProps>;

const defaultElement = 'div';

export const Box = React.forwardRef(
  ({ as, ...restProps }: BoxOwnProps, ref: React.Ref<Element>) => {
    const Element = as || defaultElement;
    return <Element ref={ref} {...restProps} />;
  },
) as <E extends React.ElementType = typeof defaultElement>(
  props: BoxProps<E>,
) => JSX.Element;
