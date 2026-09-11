import React from 'react';

export default function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'link' | 'dark'
  href,
  onClick,
  className = '',
  showArrow = false,
  type = 'button',
  ...props
}) {
  const baseStyles = "group relative inline-flex items-center justify-between px-8 py-4 text-[0.64rem] tracking-[0.3em] uppercase font-sans transition-all duration-500 overflow-hidden";
  
  let variantStyles = "";
  let arrowColorStyles = "";

  switch (variant) {
    case 'primary':
      variantStyles = "border border-stone-900 text-stone-900 hover:border-amber-700";
      arrowColorStyles = "bg-stone-900 group-hover:bg-stone-50 border-stone-900 group-hover:border-stone-50";
      break;
    case 'secondary':
      variantStyles = "border border-amber-700/40 text-amber-700 hover:border-amber-700";
      arrowColorStyles = "bg-amber-700 group-hover:bg-stone-50 border-amber-700 group-hover:border-stone-50";
      break;
    case 'dark':
      variantStyles = "border border-stone-50/30 text-stone-50 hover:text-stone-950";
      arrowColorStyles = "bg-stone-50 text-stone-950";
      break;
    case 'outline':
      variantStyles = "border border-stone-900/20 text-stone-900 hover:border-stone-900";
      arrowColorStyles = "bg-stone-900 group-hover:bg-stone-50 border-stone-900 group-hover:border-stone-50";
      break;
    case 'link':
      return (
        <button
          type={type}
          onClick={onClick}
          className={`group inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase font-sans text-stone-900 hover:text-amber-700 transition-colors ${className}`}
          {...props}
        >
          <span className="w-6 h-[1px] bg-current transition-all duration-300 group-hover:w-10" />
          <span>{children}</span>
        </button>
      );
    default:
      variantStyles = "border border-stone-900 text-stone-900";
      arrowColorStyles = "bg-stone-900 group-hover:bg-stone-50";
  }

  const content = (
    <>
      <span 
        className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out ${
          variant === 'secondary' ? 'bg-amber-700' : variant === 'dark' ? 'bg-stone-50' : 'bg-stone-900'
        }`} 
      />
      <span className={`relative z-10 transition-colors duration-500 ${
        variant === 'dark' ? 'group-hover:text-stone-950' : 'group-hover:text-stone-50'
      }`}>
        {children}
      </span>
      {showArrow && (
        <span className="relative z-10 ml-6 flex items-center transition-colors duration-500">
          <span className={`w-4 h-[1px] transition-all duration-300 ${
            variant === 'dark' ? 'bg-stone-50 group-hover:bg-stone-950 group-hover:w-8' : 'bg-stone-900 group-hover:bg-stone-50 group-hover:w-8'
          }`} />
          <span className={`w-[6px] h-[6px] border-t border-r rotate-45 -ml-[3px] transition-colors duration-500 ${
            variant === 'dark' ? 'border-stone-50 group-hover:border-stone-950' : 'border-stone-900 group-hover:border-stone-50'
          }`} />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {content}
    </button>
  );
}
