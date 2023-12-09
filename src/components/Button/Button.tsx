import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
	variant?: 'primary' | 'secondary'; 
}

type Ref = HTMLButtonElement;

/**
 * An example button component.
 * Customize your button with addtional logic and styling. 
 */
export const Button = forwardRef<Ref, Props>((props, ref) => (
	<button ref={ref} {...props}>
		{props.children}
	</button>
))
