import { type ComponentProps } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const textareaVariants = cva(
  cn(
    "border border-gray-200 text-gray-900 px-4 flex field-sizing-content min-h-16 w-full border bg-transparent px-3 transition-[color,border-color] outline-none",
    "placeholder:text-gray-500",
    "focus-visible:border-gray-500 focus-visible:ring-ring/50 focus-visible:ring-[3px]",
    "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
    "disabled:bg-gray-100 disabled:text-gray-200"
  ),
  {
    variants: {
      size: {
        md: "rounded-md py-[9.5px] body02M",
        lg: "rounded-lg py-3 body01M",
      },
      isError: {
        true: "border-red-500",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      isError: false,
    },
  }
);

interface TextareaProps
  extends Omit<ComponentProps<"textarea">, "size">,
    VariantProps<typeof textareaVariants> {}

function Textarea({ size, isError, className, ...props }: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(textareaVariants({ size, isError, className }))}
      {...props}
    />
  );
}

export { Textarea };
export type { TextareaProps };
