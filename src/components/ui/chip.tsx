import { type ComponentProps, type ReactNode } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { Checkbox as ChipPrimitive } from "radix-ui";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const chipVariants = cva(
  cn(
    "inline-flex items-center justify-center bg-white border border-gray-200 text-gray-900 transition duration-200 whitespace-nowrap",
    "hover:border-gray-900",
    "disabled:bg-gray-200 disabled:text-white disabled:hover:border-gray-200 disabled:hover:text-white",
    "data-[state=checked]:bg-gray-900 data-[state=checked]:text-white data-[state=checked]:border-gray-900 data-[state=checked]-hover:text-white",
    "data-[state=checked]:disabled:bg-gray-200 data-[state=checked]:disabled:border-gray-200 data-[state=checked]:disabled:text-white",
    "focus-visible:outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
  ),
  {
    variants: {
      size: {
        xs: "body03R h-6 px-2 rounded-sm",
        sm: "body02M h-8 px-2 rounded-sm",
        md: "body02M h-10 px-4 rounded-lg",
        lg: "body01M h-12 px-4 rounded-lg",
      },
      hasTrailingIcon: {
        true: "data-[state=checked]:gap-x-1",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      hasTrailingIcon: false,
    },
  }
);

const lucideVariants = cva("text-white", {
  variants: {
    size: {
      xs: "size-3",
      sm: "size-3.5",
      md: "size-4",
      lg: "size-4",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface ChipProps
  extends ComponentProps<typeof ChipPrimitive.Root>,
    VariantProps<typeof chipVariants> {
  children: ReactNode;
}

function Chip({
  size,
  className,
  children,
  hasTrailingIcon,
  ...props
}: ChipProps) {
  return (
    <ChipPrimitive.Root
      className={cn(chipVariants({ size, hasTrailingIcon }), className)}
      {...props}
    >
      {children}
      {hasTrailingIcon && (
        <ChipPrimitive.Indicator className="flex items-center justify-center">
          <CheckIcon className={lucideVariants({ size })} />
        </ChipPrimitive.Indicator>
      )}
    </ChipPrimitive.Root>
  );
}

export { Chip };
export type { ChipProps };
