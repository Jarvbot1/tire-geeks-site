'use client';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'cta' | 'ghost' | 'outline';
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
  fullWidth?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export default function Button({
  children,
  variant = 'cta',
  href,
  onClick,
  className = '',
  external = false,
  fullWidth = false,
  size = 'md',
}: ButtonProps) {
  const sizeClasses = {
    xs: 'px-4 py-2 text-[12px]',
    sm: 'px-5 py-2.5 text-[13px]',
    md: 'px-10 py-4 text-[15px]',
    lg: 'px-12 py-4 text-[16px]',
  };

  const baseClasses = `
    font-nav font-bold uppercase tracking-[0.1em] rounded-[4px]
    inline-flex items-center justify-center gap-2 whitespace-nowrap
    transition-all duration-200
    ${sizeClasses[size]}
    ${fullWidth ? 'w-full' : ''}
    ${variant === 'cta' ? 'btn-cta' : ''}
    ${variant === 'ghost' ? 'btn-ghost' : ''}
    ${variant === 'outline' ? 'border border-[rgba(255,255,255,0.2)] text-[#F2F2F2] hover:border-[rgba(255,255,255,0.5)]' : ''}
    ${className}
  `.trim();

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}
