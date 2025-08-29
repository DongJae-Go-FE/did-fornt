import { type ComponentProps } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

import { Search as SearchIcon } from "lucide-react";

const searchVariants = cva(
  cn(
    "border-gray-200 border text-gray-900 transition-[box-shadow]",
    "placeholder:text-gray-500",
    "disabled:border-gray-200 disabled:text-gray-200",
    "focus-visible:outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
  ),
  {
    variants: {
      size: {
        sm: "body02M h-8 pl-7 pr-2 rounded-sm",
        md: "body02M h-10 pl-9 pr-4 rounded-md",
        lg: "body01M h-12 pl-12 pr-4 rounded-lg",
      },
      shape: {
        box: "",
        capsule: "rounded-full",
      },
    },
    defaultVariants: {
      size: "md",
      shape: "box",
    },
    compoundVariants: [
      {
        size: "sm",
        shape: "capsule",
        class: "pl-9",
      },
    ],
  }
);

const lucideVariants = cva(
  "absolute top-1/2 -translate-y-1/2 group-has-disabled:text-gray-200",
  {
    variants: {
      size: {
        sm: "w-3.5 h-3.5 left-2",
        md: "w-3.5 h-3.5 left-4",
        lg: "w-6 h-6 left-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

interface SearchProps
  extends Omit<ComponentProps<"input">, "size">,
    VariantProps<typeof searchVariants> {}

function Search({ size, shape, className, ...props }: SearchProps) {
  return (
    <div className="relative w-fit group">
      <SearchIcon
        className={cn(
          lucideVariants({ size }),
          shape === "capsule" && size === "sm" && "left-4"
        )}
      />
      <input
        className={cn(searchVariants({ size, shape, className }))}
        {...props}
      />
    </div>
  );
}

export { Search };
export type { SearchProps };
