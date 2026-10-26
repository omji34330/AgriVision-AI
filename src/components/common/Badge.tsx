import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'healthy' | 'warning' | 'danger' | 'info' | 'neutral' | 'earth';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  className = '',
}) => {
  const variantStyles = {
    healthy: 'bg-emerald-50 text-emerald-800 border-emerald-200/80 font-medium',
    warning: 'bg-amber-50 text-amber-800 border-amber-200/80 font-medium',
    danger: 'bg-rose-50 text-rose-800 border-rose-200/80 font-medium',
    info: 'bg-blue-50 text-blue-800 border-blue-200/80 font-medium',
    neutral: 'bg-slate-100 text-slate-700 border-slate-200 font-medium',
    earth: 'bg-earth-100 text-earth-800 border-earth-300 font-medium',
  };

  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5 rounded-md',
    md: 'text-xs px-2.5 py-1 rounded-full',
    lg: 'text-sm px-3 py-1.5 rounded-full',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 border ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
};
