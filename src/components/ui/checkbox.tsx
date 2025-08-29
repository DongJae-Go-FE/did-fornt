"use client";

import { type ComponentProps, type ReactNode } from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const checkboxVariants = cva(
  cn(
    "border border-gray-500 rounded-xs",
    "data-[state=checked]:bg-gray-900 data-[state=checked]:border-gray-900 data-[state=checked]:text-white",
    "disabled:border-gray-200 disabled:bg-gray-100 data-[state=checked]:disabled:border-gray-200 data-[state=checked]:disabled:bg-gray-100 data-[state=checked]:disabled:text-gray-200"
  ),
  {
    variants: {
      size: {
        xs: "size-3.5",
        sm: "size-4",
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
      xs: "size-3",
      sm: "size-3.5",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

interface CheckboxProps
  extends ComponentProps<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {}

function Checkbox({ className, size, ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(checkboxVariants({ size }), className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator data-slot="checkbox-indicator">
        <CheckIcon className={lucideVariants({ size })} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

const checkboxButtonVariants = cva("", {
  variants: {
    size: {
      xs: "body03R",
      sm: "body02M",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

interface CheckboxButtonProps
  extends ComponentProps<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxButtonVariants> {
  children?: ReactNode;
  htmlFor?: string;
  name?: string;
}

function CheckboxButton({
  size,
  children,
  htmlFor,
  className,
  ...props
}: CheckboxButtonProps) {
  return (
    <div className={cn("inline-flex items-center gap-x-1 group", className)}>
      <Checkbox
        className="group-hover:border-gray-900 duration-300 transition-[border-color] peer"
        size={size}
        {...props}
      />
      <label
        htmlFor={htmlFor}
        className={cn(
          checkboxButtonVariants({ size }),
          "peer-disabled:text-gray-200"
        )}
      >
        {children}
      </label>
    </div>
  );
}

export { Checkbox, CheckboxButton };
export type { CheckboxProps, CheckboxButtonProps };
