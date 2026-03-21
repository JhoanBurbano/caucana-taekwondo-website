import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'md' | 'lg';

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClassMap: Record<ButtonVariant, string> = {
  primary: 'button button--primary',
  secondary: 'button button--secondary',
  ghost: 'button button--ghost',
};

const sizeClassMap: Record<ButtonSize, string> = {
  md: 'button--md',
  lg: 'button--lg',
};

export function LinkButton({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  ...rest
}: ButtonLinkProps) {
  return (
    <a className={`${variantClassMap[variant]} ${sizeClassMap[size]} ${className}`.trim()} href={href} {...rest}>
      {children}
    </a>
  );
}
