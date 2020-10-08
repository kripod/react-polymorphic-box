import React from "react";

export interface BoxOwnProps<E extends React.ElementType = React.ElementType> {
	as?: E;
}

export type BoxProps<E extends React.ElementType> = BoxOwnProps<E> &
	Omit<React.ComponentPropsWithRef<E>, keyof BoxOwnProps>;

const defaultElement = "div";

export const Box: <E extends React.ElementType = typeof defaultElement>(
	props: BoxProps<E>,
) => React.ReactElement | null = React.forwardRef(function Box(
	props: BoxOwnProps,
	ref: React.Ref<Element>,
) {
	const Element = props.as || defaultElement;
	return <Element ref={ref} {...props} as={undefined} />;
});
