import React from "react";

import { PropsOf } from "./utils";

export interface BoxOwnProps<E extends React.ElementType = React.ElementType> {
	as?: E;
}

export type BoxProps<E extends React.ElementType> = BoxOwnProps<E> &
	Omit<PropsOf<E>, keyof BoxOwnProps>;

const defaultElement = "div";

export const Box = React.forwardRef(
	(props: BoxOwnProps, ref: React.Ref<Element>) => {
		const Element = props.as || defaultElement;
		return <Element ref={ref} {...props} as={undefined} />;
	},
) as <E extends React.ElementType = typeof defaultElement>(
	props: BoxProps<E>,
) => JSX.Element;
