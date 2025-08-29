"use client";
import { type ComponentProps } from "react";
import { Switch as SwitchPrimitive } from "radix-ui";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const switchVariants = cva(
  cn(
    "group inline-flex shrink-0 items-center border-[2px] border-transparent transition-all outline-none",
    "data-[state=checked]:bg-gray-900 data-[state=unchecked]:bg-gray-200",
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
    "data-[state=checked]:disabled:bg-gray-200"
  ),
  {
    variants: {
      size: {
        sm: "w-8 h-4 rounded-lg",
        md: "w-[46px] h-6 rounded-xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const switchThumbVariants = cva(
  cn(
    "bg-background pointer-events-none block rounded-full ring-0 transition-transform drop-shadow-lg",
    "data-[state=unchecked]:translate-x-0",
    "group-disabled:opacity-25"
  ),
  {
    variants: {
      size: {
        sm: "size-3 data-[state=checked]:translate-x-[calc(100%+4px)]",
        md: "size-5 data-[state=checked]:translate-x-[calc(100%+2px)]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

interface SwitchProps
  extends ComponentProps<typeof SwitchPrimitive.Root>,
    VariantProps<typeof switchVariants> {}

function Switch({ className, size, ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(switchVariants({ size }), className)}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={switchThumbVariants({ size })}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
export type { SwitchProps };
