import { cva, type VariantProps } from "class-variance-authority";

import { type ButtonHTMLAttributes, type Ref } from "react";
import * as Lucide from "lucide-react";

import { cn } from "@/lib/utils";

const iconButtonVariants = cva(
  cn(
    "flex items-center justify-center cursor-pointer text-gray-900 rounded-full transition",
    "hover:text-gray-800",
    "disabled:cursor-default disabled:text-gray-200 disabled:hover:bg-white"
  ),
  {
    variants: {
      size: {
        xs: "w-6 h-6",
        sm: "w-8 h-8",
        md: "w-10 h-10",
      },
      state: {
        selected: "bg-gray-100",
        disabled: "",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

const lucideVariants = cva("", {
  variants: {
    size: {
      xs: "w-4 h-4",
      sm: "w-6 h-6",
      md: "w-6 h-6",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  icon: keyof typeof Lucide.icons;
}

function IconButton(
  { className, children, size = "sm", icon, state, ...props }: IconButtonProps,
  ref?: Ref<HTMLButtonElement>
) {
  const Comp = Lucide[icon];

  return (
    <button
      ref={ref}
      className={cn(
        iconButtonVariants({
          size,
          state: props.disabled ? "disabled" : state,
          className,
        })
      )}
      {...props}
    >
      {children || <Comp className={lucideVariants({ size })} />}
    </button>
  );
}

export { IconButton };
export type { IconButtonProps };
