import { type ComponentProps } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const tagVariants = cva(
  "inline-flex justify-center items-center transition text-gray-500 body03M border border-gray-200 h-6 px-2",
  {
    variants: {
      color: {
        gray: "bg-gray-200",
        outlined: "bg-white",
      },
      shape: {
        box: "rounded-sm",
        capsule: "rounded-full",
      },
    },
    defaultVariants: {
      shape: "box",
      color: "outlined",
    },
  }
);

interface TagProps
  extends Omit<ComponentProps<"span">, "color">,
    VariantProps<typeof tagVariants> {}

function Tag({ color, shape, className, ...props }: TagProps) {
  return (
    <span className={cn(tagVariants({ color, shape, className }))} {...props} />
  );
}

export { Tag };
export type { TagProps };
