"use client";

import {
  createContext,
  useContext,
  useEffect,
  type ReactNode,
  type ComponentProps,
  useState,
} from "react";

import Flicking, {
  type FlickingOptions,
  type ReadyEvent,
  type Status,
} from "@egjs/react-flicking";

import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/pagination.css";

import { Button } from "./button";
import { IconButton } from "./icon-button";
import { TextButton } from "./text-button";
import { cn } from "@/lib/utils";

type CarouselContextProps = {
  hasHeader?: boolean;
  isEnableKeyboard?: boolean;
  status?: Status;
  flicking?: Flicking;
  flickingOptions?: Partial<FlickingOptions>;
  handleReady: (e: ReadyEvent<Flicking>) => void;
};

type CarouselProps = {
  className?: string;
  children: ReactNode;
  options?: Partial<FlickingOptions>;
  hasHeader?: boolean;
  isEnableKeyboard?: boolean;
  flickingOptions?: Partial<FlickingOptions>;
};

type CarouselPaginationProps = Omit<ComponentProps<"div">, "color"> & {
  color?: "white" | "black";
};

type CarouselLabelHeaderProps = ComponentProps<"div"> & {
  labelItems?: { title: string }[];
  type?: "box" | "label";
};

const CarouselContext = createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) throw new Error("<Carousel> 안에서만 사용해야 합니다");
  return context;
}

function Carousel({
  children,
  className,
  hasHeader,
  isEnableKeyboard,
  flickingOptions,
}: CarouselProps) {
  const [status, setStatus] = useState<Status>();
  const [flicking, setFlicking] = useState<Flicking>();

  useEffect(() => {
    if (flicking) {
      setStatus(flicking.getStatus());

      flicking.on("changed", (e) => {
        setStatus(e.currentTarget.getStatus());
      });
    }
  }, [flicking]);

  useEffect(() => {
    if (!isEnableKeyboard || !flicking) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (flicking.animating) return;

      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          flicking.prev();
          break;
        case "ArrowRight":
          event.preventDefault();
          flicking.next();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [flicking, isEnableKeyboard]);

  const handleReady = (e: ReadyEvent<Flicking>) => setFlicking(e.currentTarget);

  return (
    <CarouselContext.Provider
      value={{
        hasHeader,
        isEnableKeyboard,
        status,
        flicking,
        flickingOptions,
        handleReady,
      }}
    >
      <div className={cn("relative container h-102 w-[496px] z-0", className)}>
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { hasHeader, handleReady, flickingOptions } = useCarousel();
  return (
    <div
      className={cn(
        "px-12",
        className,
        !hasHeader && flickingOptions?.circular
          ? "h-[calc(100%-24px)]"
          : !hasHeader
          ? "h-full"
          : "h-[calc(100%-88px)]"
      )}
    >
      <Flicking
        className="h-full"
        align="center"
        panelsPerView={1}
        moveType={["strict", { count: 1 }]}
        threshold={100}
        duration={300}
        renderOnlyVisible={false}
        circular
        autoResize
        useResizeObserver
        preventDefaultOnDrag
        useFractionalSize
        autoInit
        {...flickingOptions}
        onReady={handleReady}
      >
        {children}
      </Flicking>
    </div>
  );
}

function CarouselItem({
  className,
  children,
  title,
  ...props
}: ComponentProps<"div">) {
  return (
    <div className={cn("flicking-panel", className)} title={title} {...props}>
      {children}
    </div>
  );
}

function CarouselPrev({
  className,
  ...props
}: Omit<ComponentProps<typeof IconButton>, "icon">) {
  const { flicking } = useCarousel();

  return (
    <IconButton
      className={cn(
        "flicking-arrow-prev absolute top-1/2 left-0 z-10 -translate-y-1/2 rounded-sm border border-gray-200 [&_svg]:size-3.5",
        className
      )}
      title="이전 슬라이드"
      onClick={() => {
        if (flicking && !flicking.animating) {
          flicking.prev();
        }
      }}
      icon="ChevronLeft"
      {...props}
    />
  );
}

function CarouselNext({
  className,
  ...props
}: Omit<ComponentProps<typeof IconButton>, "icon">) {
  const { flicking } = useCarousel();
  return (
    <IconButton
      className={cn(
        "flicking-arrow-next absolute top-1/2 right-0 z-10 -translate-y-1/2 rounded-sm border border-gray-200 [&_svg]:size-3.5",
        className
      )}
      title="다음 슬라이드"
      onClick={() => {
        if (flicking && !flicking.animating) {
          flicking.next();
        }
      }}
      icon="ChevronRight"
      {...props}
    />
  );
}

function CarouselPagination({
  className,
  color = "black",
  ...props
}: Omit<ComponentProps<"div">, "color"> & CarouselPaginationProps) {
  const { flicking } = useCarousel();

  if (!flicking) {
    return null;
  }

  if (!flicking.circular) {
    throw new Error("circular가 true여야 사용 가능합니다.");
  }

  const getDotClassName = (index: number) => {
    const baseClasses = "size-2 rounded-full cursor-pointer";
    const isActive = index === flicking.index;

    if (color === "white") {
      return cn(baseClasses, "bg-gray-500", isActive && "bg-white");
    }

    return cn(
      baseClasses,
      "bg-gray-dimmed-effect-black-30D",
      isActive && "bg-gray-dimmed-effect-black-70D"
    );
  };

  const handlePaginationClick = (targetIndex: number) => {
    if (!flicking.animating) {
      flicking.moveTo(targetIndex);
    }
  };

  return (
    <div
      style={{ bottom: 0, position: "static" }}
      className={cn(
        "flicking-pagination mt-4 flex justify-center gap-x-1.5",
        className
      )}
      {...props}
    >
      {Array.from({ length: flicking.panelCount }).map((_, i) => (
        <button
          key={i}
          type="button"
          title={`${i + 1}번째 슬라이드`}
          className={cn(
            "size-2 cursor-pointer rounded-full",
            getDotClassName(i)
          )}
          onClick={(e) => {
            e.stopPropagation();
            handlePaginationClick(i);
          }}
        />
      ))}
    </div>
  );
}

function CarouselLabelHeader({
  className,
  labelItems,
  type = "box",
  ...props
}: ComponentProps<"div"> & CarouselLabelHeaderProps) {
  const { flicking, hasHeader, status } = useCarousel();

  if (!flicking) {
    return null;
  }

  if (!hasHeader) {
    throw new Error("isLabelHeader가 true여야 사용 가능합니다.");
  }

  const getButtonTitle = (index: number) => {
    if (labelItems) return labelItems[index].title;
    return flicking.getPanel(index)?.element?.title;
  };

  const handlePaginationClick = (targetIndex: number) => {
    if (!flicking.animating) {
      flicking.moveTo(targetIndex);
    }
  };

  return (
    <div
      className={cn(
        "mb-6 flex overflow-x-auto whitespace-nowrap",
        type === "box" ? "gap-x-1.5" : "justify-center gap-x-[13px]",
        className
      )}
      {...props}
    >
      {Array.from({ length: flicking.panelCount }).map((_, i) =>
        type === "box" ? (
          <Button
            key={i}
            type="button"
            title={`${i + 1}번째 슬라이드`}
            color={i === status?.index ? "gray" : "outlined"}
            className={cn(
              "px-3",
              flicking.panelCount === 1 && "pointer-events-none"
            )}
            onClick={(e) => {
              e.stopPropagation();
              handlePaginationClick(i);
            }}
          >
            {getButtonTitle(i)}
          </Button>
        ) : (
          <TextButton
            key={i}
            type="button"
            title={`${i + 1}번째 슬라이드`}
            color="gray"
            className={cn(
              "relative h-10 whitespace-nowrap",
              i === status?.index && "text-white",
              "after:absolute after:top-1/2 after:-right-1.5 after:h-3 after:w-[1px] after:-translate-y-1/2 after:bg-gray-500 after:content-['']",
              "last-of-type:after:hidden",
              flicking.panelCount === 1 && "pointer-events-none"
            )}
            size="lg"
            onClick={(e) => {
              e.stopPropagation();
              handlePaginationClick(i);
            }}
          >
            {getButtonTitle(i)}
          </TextButton>
        )
      )}
    </div>
  );
}

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrev,
  CarouselPagination,
  CarouselLabelHeader,
};
export type { CarouselProps };
