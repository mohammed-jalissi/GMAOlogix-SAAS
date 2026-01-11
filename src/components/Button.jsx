import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  className = '',
  icon: Icon,
  ...props
}) => {
  const baseStyles = 'btn relative overflow-hidden transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group';

  const variants = {
    primary: 'bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5',
    secondary: 'bg-white text-dark border border-slate-200 hover:border-primary/50 hover:bg-slate-50 shadow-sm hover:shadow-md',
    outline: 'border-2 border-primary text-primary hover:bg-primary/5',
    ghost: 'text-slate-600 hover:text-primary hover:bg-primary/5',
    danger: 'bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/30 hover:-translate-y-0.5'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        {Icon && <Icon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />}
      </span>
    </button>
  );
};

export default Button;
