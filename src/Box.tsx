import * as React from "react";

export type BoxOwnProps<E extends React.ElementType = React.ElementType> = {
	as?: E;
	ref?: React.ComponentProps<E>["ref"];
};

export type BoxProps<
	E extends React.ElementType = React.ElementType
> = BoxOwnProps<E> & Omit<React.ComponentPropsWithoutRef<E>, never>;

const defaultElement = "div";

export const Box: <E extends React.ElementType = typeof defaultElement>(
	props: BoxProps<E>,
) => React.ReactElement | null = React.forwardRef(function Box(props, ref) {
	// eslint-disable-next-line react/prop-types
	const Element = props.as ?? defaultElement;
	return <Element ref={ref} {...props} as={undefined} />;
});
