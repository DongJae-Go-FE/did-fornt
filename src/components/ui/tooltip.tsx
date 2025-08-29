import { type ComponentProps, createContext, useContext } from "react";
import { Tooltip as TooltipPrimitive } from "radix-ui";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const tooltipContentVariants = cva(
  cn(
    "animate-in fade-in-0 zoom-in-95 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) text-balance",
    "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
    "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
  ),
  {
    variants: {
      size: {
        xs: "px-2 py-[3px] body03R rounded-sm",
        sm: "px-4 py-[5.5px] body02M rounded-sm",
        md: "px-6 py-[9.5px] body02M rounded-md",
        lg: "px-8 py-3 body01M rounded-md",
        xl: "px-10 py-4 body01B rounded-lg",
      },
      color: {
        black: "bg-gray-dimmed-effect-black-70D text-white",
        white: "bg-white text-gray-900 shadow-[0_2px_15px_rgba(0,0,0,0.3)]",
      },
    },
    defaultVariants: {
      size: "md",
      color: "black",
    },
  }
);

const tooltipArrowVariants = cva(
  "w-0 h-0 border-l-6 border-r-6 border-b-6 border-transparent border-b-gray-dimmed-effect-black-70D bg-transparent rotate-180 absolute top-[5px]",
  {
    variants: {
      color: {
        black:
          "border-b-gray-dimmed-effect-black-70D fill-gray-dimmed-effect-black-70D",
        white: " border-b-white",
      },
    },
    defaultVariants: {
      color: "black",
    },
  }
);

const TooltipContext = createContext<{
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: "black" | "white";
  isArrow?: boolean;
}>({
  size: "md",
  color: "black",
  isArrow: true,
});

function TooltipProvider({
  delayDuration = 0,
  ...props
}: ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

function Tooltip({
  size = "md",
  color = "black",
  isArrow = true,
  ...props
}: ComponentProps<typeof TooltipPrimitive.Root> & {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: "black" | "white";
  isArrow?: boolean;
}) {
  return (
    <TooltipProvider>
      <TooltipContext.Provider value={{ size, color, isArrow }}>
        <TooltipPrimitive.Root data-slot="tooltip" {...props} />
      </TooltipContext.Provider>
    </TooltipProvider>
  );
}

function TooltipTrigger({
  ...props
}: ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: ComponentProps<typeof TooltipPrimitive.Content> &
  VariantProps<typeof tooltipContentVariants>) {
  const { size, color, isArrow } = useContext(TooltipContext);

  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(tooltipContentVariants({ size, color }), className)}
        {...props}
      >
        {children}
        {isArrow && (
          <TooltipPrimitive.Arrow
            className={cn(
              "relative z-50 size-3 translate-y-[calc(-50%_-_2px)] rotate-45"
            )}
            data-slot="tooltip-arrow"
            asChild
          >
            <div
              className={cn(
                tooltipArrowVariants({ color }),
                "outline-none shadow-inherit"
              )}
            />
          </TooltipPrimitive.Arrow>
        )}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
