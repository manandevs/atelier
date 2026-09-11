import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-between whitespace-nowrap rounded-sm font-bold text-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-amber-300 border border-amber-400",
        secondary:
          "text-amber-50 bg-amber-700 hover:bg-amber-700/75",
        destructive:
          "bg-gradient-to-br from-red-600 to-red-800 text-stone-50 hover:opacity-90 border border-red-700",
        dark:
          "border border-white/40 text-white hover:border-white hover:bg-white/5",
        outline:
          "border border-amber-700/40 text-amber-700 hover:border-amber-700 hover:bg-amber-700/5",
        link: "text-stone-900 underline-offset-4 hover:underline bg-transparent justify-start p-0 h-auto",
      },
      size: {
        default: "h-auto px-8 py-3",
        sm: "h-9 rounded-md px-3 text-xs",
        xs: "h-6 rounded-md px-2 text-xs",
        lg: "h-11 rounded-md px-8 text-sm",
        icon: "h-10 w-10 aspect-square",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef(
  ({ className, variant, size, href, showArrow, children, ...props }, ref) => {
    const content = (
      <>
        <span className="relative z-10">{children}</span>
        {showArrow && (
          <span className="relative z-10 ml-6 flex items-center">
            <span className="w-4 h-[1px] bg-current group-hover:w-8 transition-all duration-300" />
            <span className="w-[6px] h-[6px] border-t border-r border-current rotate-45 -ml-[3px]" />
          </span>
        )}
      </>
    );

    if (href) {
      return (
        <a
          href={href}
          className={cn(buttonVariants({ variant, size, className }), "group")}
          {...props}
        >
          {content}
        </a>
      );
    }
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }), "group")}
        {...props}
      >
        {content}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
export default Button;
