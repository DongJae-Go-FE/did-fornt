import { type ComponentProps, useMemo } from "react";
import { Slider as SliderPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

type SliderProps = ComponentProps<typeof SliderPrimitive.Root> & {
  label?: string[];
};

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  label,
  ...props
}: SliderProps) {
  const _values = useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
        ? defaultValue
        : [min, max],
    [value, defaultValue, min, max]
  );

  if (label && 1 >= label.length) {
    throw Error("label은 1보다 커야합니다");
  }

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        label ? "h-10 flex-col gap-y-1 justify-center" : "h-6 ",
        "relative flex w-full touch-none items-center select-none",
        "data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >
      <div className={cn("w-full flex items-center", label && " h-4")}>
        <SliderPrimitive.Track
          data-slot="slider-track"
          className={cn(
            "block",
            "bg-gray-200 relative overflow-hidden rounded-full",
            "data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1"
          )}
        >
          {!props.disabled && (
            <SliderPrimitive.Range
              data-slot="slider-range"
              className={cn(
                "bg-gray-800 absolute",
                "data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
              )}
            />
          )}
        </SliderPrimitive.Track>
        {!props.disabled &&
          Array.from({ length: _values.length }, (_, index) => (
            <SliderPrimitive.Thumb
              data-slot="slider-thumb"
              key={index}
              className={cn(
                "bg-white block size-6 shrink-0 rounded-full border border-white drop-shadow-lg transition-[color,box-shadow] cursor-pointer",

                "focus-visible:outline-hidden"
              )}
            />
          ))}
      </div>
      {label && <Label label={label} disabled={props.disabled} />}
    </SliderPrimitive.Root>
  );
}

export { Slider };
export type { SliderProps };

function Label({ disabled, label }: { disabled?: boolean; label?: string[] }) {
  return (
    <ul className="flex justify-between w-full">
      {label?.map((tickValue, index) => (
        <li
          key={index}
          className="min-w-[19px] h-[23px] flex flex-col justify-center items-center"
        >
          <div className="w-[1px] h-1.5 bg-gray-200" />
          <span
            className={cn(
              "block w-full h-[17px] body04R font-medium text-center -tracking-[0.3px]",
              disabled ? "text-gray-200" : "text-gray-900"
            )}
          >
            {tickValue}
          </span>
        </li>
      ))}
    </ul>
  );
}
